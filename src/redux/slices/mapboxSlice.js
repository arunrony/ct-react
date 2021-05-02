import {createSlice} from "@reduxjs/toolkit";

const mapboxSlice = createSlice({
  name: "mapbox",
  initialState: {
      container: 'map',
            style: {
                "version": 8,
                "sources": {
                    "raster-tiles": {
                        "type": "raster",
                        "url": "mapbox://mapbox.satellite",
                        "tileSize": 256
                    }
                },
                "layers": [{
                    "id": "simple-tiles",
                    "type": "raster",
                    "source": "raster-tiles",
                    "minzoom": 0,
                    "maxzoom": 22
                }
                ]
            },
            center: [-106.81518984375957, 53.69046412135023], // starting position
            zoom: 3, // starting zoom
            localIdeographFontFamily: "Nunito Sans"
    }
})

export default mapboxSlice.reducer
