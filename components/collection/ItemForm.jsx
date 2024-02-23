"use client"
import Link from "next/link";
import * as React from 'react';
import Image from "next/image";
import CircularProgress from '@mui/material/CircularProgress';
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import { useState, useEffect } from "react"
import ItemFormCard from "@components/collection/ItemFormCard";
import ItemCard from "@components/collection/ItemCard";
import { faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ItemForm = ({ type, item, setItem, submitting, handleSubmit }) => {

  const [loading, setLoading] = useState(false);
  const [options, setSuggestions] = useState([]);
  const [stopSearching, setStopSearching] = useState(false);
  var [items, setItems] = useState([]);
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

  const laodItems = async () => {
    const result = await fetch(`/api/model?collectionId=1&&model=${item.model ?? ""}&&year=${item.year ?? ""}&&skip=${items.length}`,
      {
        method: 'GET'
      }
    ).then((response) => {
      return response.json();
    }).catch(error => {
      console.error(error);
      return [];
    });
    if (result.length == 0) {
      setStopSearching(true);
    }
    setItems([...items, ...result]);
  }
  const fetchItemsBy = async () => {
    setStopSearching(false);
    const result = await fetch(`/api/model?collectionId=1&&model=${item.model ?? ""}&&year=${item.year ?? ""}&&skip=0`,
      {
        method: 'GET'
      }
    ).then((response) => {
      return response.json();
    }).catch(error => {
      console.error(error);
      return [];
    });
    setItems(result);
  }


  const openRegisterForm = async () => {
    document.getElementById("item_selection").style.display = "none";
    document.getElementById("item_register").style.display = "flex";
  }

  const openSelectionForm = async () => {
    document.getElementById("item_selection").style.display = "flex";
    document.getElementById("item_selection").style.display = "none";
  }


  const handleScroll = (e) => {
    if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight) {
      if (!stopSearching) {
        laodItems();
      }
    }
  }

  const removeFile = (index) => {
    let data = new DataTransfer();
    Array.from(item.files).forEach((blob, i) => {
      if (i != index) {
        data.items.add(blob)
      }

    })
    setItem({ ...item, files: data.files })
  }

  useEffect(() => {
    fetchItemsBy();
  }, [])

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
              if (value) {
                setSuggestions(await fetchModels(value))
              } else {
                setSuggestions([]);
              }
            }}
            isOptionEqualToValue={isOptionEqualToValue}
            onChange={(_, newValue) => {
              if (newValue) {
                //setItem({ ...item, model: newValue.model })
                item.model = newValue.model;
              } else {
                item.model = "";
              }
              fetchItemsBy();
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
                if (value) {
                  item.year = value;
                  fetchItemsBy();
                }
              }}
              label='Year'
              required
              className='form_input'
            />
          </label>
          <div id="items" onScroll={(e) => handleScroll(e)} className="flex flex-wrap justify-center max-h-96 shadow-inner overflow-auto">
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
            {selected && <ItemCard
              itemCard={selected}
            />}
          </div>
          <label htmlFor="">
            <input
              value={item?.name}
              onChange={(e) => setItem({ ...item, name: e.target.value })}
              label='Name'
              placeholder="Name"
              required
              className='form_input'
            />
          </label>
          <label htmlFor="">
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
                let combinedFiles = new DataTransfer();
                var files = event?.target?.files;
                for (let i = 0; i < files.length; i++) {
                  const fileURL = URL.createObjectURL(files[i]);
                  files[i].url = fileURL;
                  combinedFiles.items.add(files[i]);
                }
                Array.from(item?.files).forEach(blob => {
                  combinedFiles.items.add(blob);
                });
                setItem({ ...item, files: combinedFiles.files })
              }} />
            <div className="flex justify-center flex-wrap gap-3 mt-6">
              {item.files?.length > 0 &&
                Array.from(item.files).map((file, index) => {
                  return (
                    <div key={index} className="relative">
                      <span className="top-0 right-0 p-0 m-0 absolute" onClick={() => removeFile(index)}><FontAwesomeIcon icon={faCircleXmark}/></span>
                      <Image width={300} height={300} className="object-contain" src={file.url} alt="..." />
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
