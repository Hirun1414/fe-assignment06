"use client";

import { useReducer } from "react";
import Card from "./Card";

type Action =
  | { type: "set"; venue: string; rating: number }
  | { type: "remove"; venue: string };

function reducer(state: Map<string, number>, action: Action) {
  const newMap = new Map(state);

  if (action.type === "set") {
    newMap.set(action.venue, action.rating);
  }

  if (action.type === "remove") {
    newMap.delete(action.venue);
  }

  return newMap;
}

export default function CardPanel() {
  const [ratings, dispatch] = useReducer(
    reducer,
    new Map([
      ["The Bloom Pavilion", 0],
      ["Spark Space", 0],
      ["The Grand Table", 0],
    ]),
  );

  return (
    <div>
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignContent: "space-around",
        }}
      >
        <Card
          venueName="The Bloom Pavilion"
          imgSrc="/img/bloom.jpg"
          onRate={(v) =>
            dispatch({ type: "set", venue: "The Bloom Pavilion", rating: v })
          }
        />

        <Card
          venueName="Spark Space"
          imgSrc="/img/sparkspace.jpg"
          onRate={(v) =>
            dispatch({ type: "set", venue: "Spark Space", rating: v })
          }
        />

        <Card
          venueName="The Grand Table"
          imgSrc="/img/grandtable.jpg"
          onRate={(v) =>
            dispatch({ type: "set", venue: "The Grand Table", rating: v })
          }
        />
      </div>

      <div>
        {[...ratings.entries()].map(([venue, rating]) => (
          <div
            key={venue}
            data-testid={venue}
            onClick={() => dispatch({ type: "remove", venue })}
          >
            {venue} Rating : {rating}
          </div>
        ))}
      </div>
    </div>
  );
}
