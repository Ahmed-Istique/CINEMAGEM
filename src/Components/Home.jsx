import React, { useEffect, useState } from 'react'
import HomeBanner from './HomeBanner'
import Card from './Card/Card'
import { useSelector } from 'react-redux';
import Cards from './Card/Cards';
import axios from 'axios';
import useFetch from '../hooks/useFetch';

export default function Home() {

  const trandingMovies = useSelector(state => state.movieData.bannerData);
  const {data:nowPlayingDB} = useFetch("/movie/now_playing")
  const {data:upComingDB} = useFetch("/movie/upcoming")
  const {data:airingTodayDB} = useFetch("/tv/airing_today")
  const {data:popularDB} = useFetch("/movie/popular")

  return (
    <>
      <div className='' >
        <HomeBanner></HomeBanner>
        <Cards data={trandingMovies} media_type={"movie"} heading={"Tranding Movie"}></Cards>
        <Cards data={nowPlayingDB} media_type={"movie"}  heading={"Now playing"}></Cards>
        <Cards data={upComingDB} media_type={"movie"} heading={"Up Coming"}></Cards>
        <Cards data={airingTodayDB} media_type={"tv"} heading={"Airing Today"}></Cards>
        <Cards data={popularDB} media_type={"tv"} heading={"Popular"}></Cards>
      </div>

    </>
  )
}
