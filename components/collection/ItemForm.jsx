"use client"
import Link from "next/link";
import * as React from 'react';
import Image from "next/image";
import CircularProgress from '@mui/material/CircularProgress';
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import { useState } from "react"
import ItemFormCard from "@components/collection/ItemFormCard";
import Modal from "@components/Modal";

const ItemForm = ({ type, item, setItem, submitting, handleSubmit }) => {

  const [loading, setLoading] = useState(false);
  const [options, setSuggestions] = useState([]);
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);
  const isOptionEqualToValue = (option, value) => option.model === value.model && option.id === value.id;
  const [files, setImage] = useState(null);

  const fetchModels = async (value) => {
    setLoading(true);
    const models = await fetch(`/api/model/autocomplete/${value}`,
      {
        method: 'GET'
      }
    ).then((response) => {
      return response.json();
    }).catch(error => {
      console.error(error);
      return [];
    });
    setLoading(false);
    return models;
  }
  const fetchItems = async () => {
    const items = await fetch(`/api/model?collectionId=1&&model=${item.model ?? ""}&&year=${item.year ?? ""}`,
      {
        method: 'GET'
      }
    ).then((response) => {
      return response.json();
    }).catch(error => {
      console.error(error);
      return [];
    });
    setItems(items);
  }

  const openRegisterForm = async () => {
    document.getElementById("item_selection").style.display = "none";
    document.getElementById("item_register").style.display = "flex";
  }

  const openSelectionForm = async () => {
    document.getElementById("item_selection").style.display = "flex";
    document.getElementById("item_selection").style.display = "none";
  }

  const removeFile =  (index) => {
      setItem({...item,files:Array.from(item.files).slice(0,1)})
  }

  return (
    <>
      <section id="item_selection" className='w-full max-w-full flex justify-center flex-col'>
        <h1 className='head_text'>
          <span className=''>{type} item</span>
        </h1>
        <div
          className='mt-10 w-[90%] max-w-[90%] flex flex-col gap-7 glassmorphism'
        >
          <Autocomplete
            className='form_input'
            options={options}
            getOptionLabel={(option) => option.model}
            onInputChange={async (event, value) => {
              if(value){
                setSuggestions(await fetchModels(value))
              }else{
                setSuggestions([]);
              }
            }}
            isOptionEqualToValue={isOptionEqualToValue}
            onChange={(_, newValue) => {
              if (newValue) {
                //setItem({ ...item, model: newValue.model })
                item.model = newValue.model;
                fetchItems();
              }else{
                setItems([]);
                item.model = "";
              }
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Model"
                margin="normal"
                variant="outlined"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {loading ? <CircularProgress color="inherit" size={20} /> : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                }}
              />
            )}
          />
          <label>
            <TextField
              onChange={(e) => {
                const value = e.target.value;
                if(value){
                  item.year = value;
                  fetchItems();
                }
              }}
              label='Year'
              required
              className='form_input'
            />
          </label>
          {/*<label>
            <TextField
              value={item?.name}
              onChange={(e) => setItem({ ...item, name: e.target.value })}
              label='Year'
              required
              className='form_input'
            />
          </label>
          <label>
            <TextField
              value={item?.year}
              onChange={(e) => setItem({ ...item, year: e.target.value })}
              label='Name'
              required
              className='form_input'
            />
          </label>*/}
          <div className="flex flex-wrap justify-center max-h-96 shadow-inner overflow-auto">
            {items?.map((itemCard, index) => {
              return (
                <ItemFormCard
                  key={index}
                  itemCard={itemCard}
                  itemForm={item}
                  setItem={setItem}
                  setSelected={setSelected}
                />
              )
            })}
          </div>
          <div className='flex-end mx-3 mb-5 gap-4'>
            <Link href='/collection' className='text-gray-500 text-sm'>
              Cancel
            </Link>

            <button
              type='submit'
              onClick={() => openRegisterForm()}
              className='px-5 py-1.5 text-sm bg-blue-900 rounded-full text-white'
            >
              next
            </button>
          </div>
        </div>
      </section>
      <section id="item_register" className='w-full max-w-full  justify-center flex-col hidden'>
        <form
          onSubmit={handleSubmit}
          className='mt-10 w-[90%] max-w-[90%] flex flex-col gap-7 glassmorphism'
        >
          <div className="flex flex-wrap justify-center">
            {selected && <ItemFormCard
              itemCard={selected}
              itemForm={selected}
              setItem={setItem}
            />}
          </div>
          <label>
            <textarea
              value={item?.description}
              onChange={(e) => setItem({ ...item, description: e.target.value })}
              placeholder='Description'
              required
              className='form_input'
            ></textarea>
          </label>
          <label htmlFor="">
            <input
              type="file"
              multiple
              className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
              placeholder="Type in here…"
              onChange={(event) => {
                var files = event?.target?.files;
                for (let i = 0; i < files.length; i++) {
                  const fileURL = URL.createObjectURL(files[i]);
                  files[i].url = fileURL;
                }
                Array.from(files).push(...item.files);
                setItem({...item,files:files})
              }} />
              <div className="flex gap-3 mt-6">
                {item.files?.length > 0 && 
                  Array.from(item.files).map((file,index) => {
                      console.log(file.url);
                      return (
                        <div key={index} className="relative">
                          <span className="top-0 right-0 p-0 m-0 absolute" onClick={() => removeFile(index)}>x</span>
                          <Image  width={100} height={100} className="object-contain" src={file.url} alt="..."/>
                        </div>
                      )
                  })
                }
              </div>
          </label>
        
          <div className='flex-end mx-3 mb-5 gap-4'>
            <Link href='/collection' className='text-gray-500 text-sm'>
              Cancel
            </Link>
            <button
              type='submit'
              disabled={submitting}
              className='px-5 py-1.5 text-sm bg-blue-900 rounded-full text-white'
            >
              {submitting ? `${type}ing...` : type}
            </button>
          </div>
        </form>
      </section>
    </>

  );
};

export default ItemForm;
