import React from 'react'
import './About.css';

export default function About() {
  return (
    <section className="about-section">
      <div className="about-content ">
        <h1 className="mb-6 tracking-wider mt-40 text-white lg:text-5xl text-2xl uppercase">About CINEMAGEM</h1>
        <p className="about-description text-white mt-5">
          Welcome to CINEMAGEM, where we bring the world of cinema to your fingertips. We are dedicated to delivering high-quality content, from the latest movie releases to timeless classics. Whether you're looking for movie reviews, news, or simply want to explore the best of the cinematic world, CINEMAGEM is your go-to destination.
        </p>
        <p className="about-description text-white">
          Our mission is to create a community of passionate movie lovers, offering a space where fans can discuss, discover, and dive deep into the magic of movies. With a curated selection of films, ratings, trailers, and insights, we aim to inspire and inform both casual viewers and cinephiles alike.
        </p>
        <div className="about-team bg-gradient-to-r from-blue-500 to-purple-500">
          <h2 className="about-team-title">Meet Our Team</h2>
          <p className="about-team-description">
            CINEMAGEM is powered by a dedicated team of cinema enthusiasts, writers, and film critics, each passionate about sharing their love for the art of filmmaking. Our team works relentlessly to provide you with the most comprehensive and up-to-date content.
          </p>
        </div>
      </div>
    </section>
  );
}
