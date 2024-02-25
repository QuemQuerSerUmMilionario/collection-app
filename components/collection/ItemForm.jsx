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
import Loading from "@app/(home)/collection/[id]/item/loading";
import ErrorCard from "@components/ErrorCard";

const ItemForm = ({ type, item, setItem, submitting, handleSubmit }) => {

  const [loadingModel, setloadingModel] = useState(false);
  const [loading, setloading] = useState(false);
  const [loadingScreen, setloadingScreen] = useState(false);
  const [options, setSuggestions] = useState([]);
  const [stopSearching, setStopSearching] = useState(false);
  var [items, setItems] = useState([]);
  const [error,setError] = useState(null);
  const [selected, setSelected] = useState(null);
  const isOptionEqualToValue = (option, value) => option.model === value.model && option.id === value.id;
  const [files, setImage] = useState(null);

  const fetchModels = async (value) => {
    setloadingModel(true);
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
    setloadingModel(false);
    return models;
  }

  const laodItems = async () => {
    setloading(true);
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
    setloading(false);
    setItems([...items, ...result]);
  }
  const fetchItemsBy = async () => {
    setloading(true);
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
    setloading(false);
    setItems(result);
  }


  const openRegisterForm = async () => {
    if(selected){
      setError(null);
      setloadingScreen(true);
      document.getElementById("item_selection").style.display = "none";
      setTimeout(function(){
        setloadingScreen(false);
        document.getElementById("item_register").style.display = "flex";
      },1000)
   
    }else{
      setError({message:"Select a item to continue"})
    }
  }

  const openSelectionForm = async () => {
    setError(null);
    document.getElementById("item_register").style.display = "flex";
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
    <div className="w-full h-full flex flex-col  items-center">
      <h1 className='head_text'>
          <span className=''>{type} item</span>
      </h1>
      <section id="item_selection" className='w-full max-w-full flex justify-center flex-col'>
      
        <div
          className='mt-10 w-full flex flex-col gap-7 glassmorphism'
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
                      {loadingModel ? <CircularProgress color="inherit" size={20} /> : null}
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
            {loading && <Loading/>}
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
          {
            error && <ErrorCard error={error}/>
          }
      </section>
      {loadingScreen && <CircularProgress color="inherit" className="m-auto" size={20} />}
      <section id="item_register" className='w-full max-w-full  justify-center flex-col hidden'>
        <form
          onSubmit={handleSubmit}
          className='mt-10 w-[90%] max-w-[90%] flex flex-col gap-7 glassmorphism'
        >
           <span type="button"  className="text-gray-500 text-sm cursor-pointer self-start underline" onClick={(e) => openSelectionForm()}>back</span>
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
    </div>

  );
};

export default ItemForm;
