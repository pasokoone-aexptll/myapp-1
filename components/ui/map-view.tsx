"use client"

import { useEffect, useRef, useState } from "react"
import * as maplibregl from "maplibre-gl"
import type { GeoJSONSource } from "maplibre-gl"
import type { Person } from "@/stores/antennaSpaceStore";
import "maplibre-gl/dist/maplibre-gl.css"

type MapsViewProps = {
  people: Person[];
}

maplibregl.setWorkerUrl("/maplibre/maplibre-gl-worker.mjs")

export function MapView({ people }: MapsViewProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<maplibregl.Map | null>(null)
  const [initialPeople] = useState(() => people)

  function createPeopleGeoJSON(currentPeople: Person[]) {
    return {
      type: "FeatureCollection" as const,
      features: currentPeople.map((person) => ({
        type: "Feature" as const,
        properties: {
          id: person.id,
          name: person.name,
        },
        geometry: {
          type: "Point" as const,
          coordinates: [person.lng, person.lat],
        },
      })),
    }
  }

  useEffect(() => {
    if (!containerRef.current) return

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: "https://tiles.openfreemap.org/styles/positron",
      center: [139.702, 35.695],
      zoom: 15.5,
      pitch: 55,
      bearing: -20,
    })
    mapRef.current = map

    map.on("load", () => {
      map.addSource("openfreemap", {
        type: "vector",
        url: "https://tiles.openfreemap.org/planet",
      })

      map.addLayer({
        id: "3d-buildings",
        type: "fill-extrusion",
        source: "openfreemap",
        "source-layer": "building",

        minzoom: 15,

        filter: ["!=", ["get", "hide_3d"], true],

        paint: {
          "fill-extrusion-color": "#e8e4dc",

          "fill-extrusion-height": [
            "interpolate",
            ["linear"],
            ["zoom"],
            15,
            0,
            16,
            ["get", "render_height"],
          ],

          "fill-extrusion-base": [
            "case",
            [">=", ["get", "zoom"], 16],
            ["get", "render_min_height"],
            0,
          ],

          "fill-extrusion-opacity": 0.9,
        },
      })

      map.addSource("people", {
        type: "geojson",
        data: createPeopleGeoJSON(initialPeople),
      })

      // 影
      map.addLayer({
        id: "people-shadow",
        type: "circle",
        source: "people",
        paint: {
          "circle-radius": 6,
          "circle-color": "#000000",
          "circle-stroke-width": 6,
          "circle-stroke-color": "#000000",
          "circle-opacity": 0.4,
          "circle-translate": [2, 4],
          "circle-blur": 1.5,
        },
      })

      // 本体
      map.addLayer({
        id: "people",
        type: "circle",
        source: "people",
        paint: {
          "circle-radius": 6,
          "circle-color": "#4A11F5",
          "circle-stroke-width": 4,
          "circle-stroke-color": "#ffffff",
        },
      })

      map.addLayer({
        id: "people-labels",
        type: "symbol",
        source: "people",
        layout: {
          "text-field": ["get", "name"],
          "text-size": 12,
          "text-offset": [0, 1.5],
          "text-anchor": "top",
        },
        paint: {
          "text-color": "#5f5660",
          "text-halo-color": "#ffffff",
          "text-halo-width": 2,
        },
      })

      map.setPaintProperty(
        "3d-buildings",
        "fill-extrusion-color",
        "#f3e8df"
      )
    })

    return () => {
      mapRef.current = null
      map.remove()
    }
  }, [initialPeople])

  useEffect(() => {
    const source = mapRef.current?.getSource("people") as GeoJSONSource | undefined

    if (source?.type === "geojson") {
      source.setData(createPeopleGeoJSON(people))
    }
  }, [people])

  return (
    <div
      ref={containerRef}
      className="h-full w-full"
    />
  )
}