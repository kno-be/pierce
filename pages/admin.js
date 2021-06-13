import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { useForm } from "react-hook-form";
import Footer from '../components/footer/footer';
import axios from 'axios';
import useSWR from 'swr';

export function delProd() {

}

export function updProd() {

}

const fetcher = url => axios.get(url).then(res => res.data)


export default function AdminPage() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { data, error } = useSWR('/api/inventory', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  console.log({errors})
  console.log(watch("prodTitle"));



  const onSubmit = product => {
    axios
    .post("http://localhost:3000/api/inventory", product)
    .then(res => console.log(res))
    .catch(err => console.log(err));
    }
  
  return (
    <div>
      <Head>
        <title>Admin Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="h-full">
        <div className="w-full bg-black">
          <div className="container:md flex flex-col flex-wrap items-center space-y-1 py-4 mx-auto  md:flex-row md:max-w-xl">
            <div className="  text-white items-start">
              <h1 className="text-xl">Admin</h1>
            </div>
            <div className=" text-white items-center mx-auto">
              <span>Logs</span>
              <span className="px-4">Docs</span>
              <span>About</span>
              <span className="px-4">AWS</span>
            </div>
            <hr className=""></hr>
            <div className="text-white items-end">
              <div className="">
                <button type="button" className="bg-red-700 px-2 py-1">
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container:xl flex flex-col justify-center items-center md:flex-row ">
          <div className="flex flex-col  bg-white ">
            <div className="flex flex-col border-2 border-white  py-11 px-11 ">
              <div className="flex flex-col border-2 border-white bg-gray-300 my-8">
                <div className="text-xl text-center py-4 px-4">
                  <h1 className="font-sans antialiased text-opacity-60 text-2xl pb-4">
                    Create product:
                  </h1>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="border-2 border-gray-300 px-4 py-4 mb-4"
                  >
                    <div className="flex flex-col text-lg text-left mb-8">
                      <label for="prodTitle" className="font-sans antialiased">
                        Title:
                      </label>
                      <input
                        {...register('prodTitle', {
                          required: true,
                          maxLength: 20,
                        })}
                        className="bg-white w-auto m-1"
                      ></input>
                      <label className="font-sans antialiased">Price:</label>
                      <input
                        {...register('prodPrice', {
                          required: true,
                          maxLength: 20,
                        })}
                        className="bg-white w-auto m-1"
                      ></input>
                      <label className="font-sans antialiased">
                        Image path:
                      </label>
                      <input
                        {...register('prodImg', {
                          required: true,
                          maxLength: 20,
                        })}
                        className="bg-white w-auto m-1"
                      ></input>
                      <label className="font-sans antialiased">Color:</label>
                      <input
                        {...register('prodColor', {
                          required: true,
                          maxLength: 20,
                        })}
                        className="bg-white w-auto m-1"
                      ></input>
                      <label className="font-sans antialiased text-md">
                        Tags:
                      </label>
                      <textarea
                        id="prodTags"
                        name="prodTags"
                        cols="40"
                        rows="5"
                      />
                      <div className="flex flex-row  bg-gray-300 my-4">
                        <input
                          type="submit"
                          value="submit"
                          className="font-sans antialiased text-md w-full bg-green-500 py-4"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col h-96   bg-white ">
            <div className="">
              <h1 className="font-sans antialiased text-opacity-60 text-2xl py-4 px-24">
                Inventory
              </h1>
              <ul className="px-4 mb-4">
                
                  {data.map((item) => (
                    <li classname="text-xl" key={item.id}>
                    <a> Product: {item.prodTitle} </a>
                    </li>
                  ))}
                
              </ul>
              {/* <button onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
              <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button> */}

              <div className="flex flex-row px-4">
                <button
                  type="button"
                  onClick={() => console.log("DELETE")}
                  className="text-md w-full bg-red-500 py-4"
                >
                  Delete
                </button>
                <button
                  type="button"
                  onClick={() => console.log("EDIT")}
                  className="text-md w-full bg-yellow-500 py-4"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );


}