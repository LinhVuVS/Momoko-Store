"use client";

import React, { useEffect } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj"; // Thêm hàm chuyển đổi tọa độ
import "ol/ol.css";

const MapComponent = () => {
    useEffect(() => {
        // Tọa độ mặc định (longitude, latitude)
        const defaultCoordinates = [105.71224426027516, 21.01575885134874];

        // Chuyển đổi tọa độ từ EPSG:4326 sang EPSG:3857
        const center = fromLonLat(defaultCoordinates);

        const map = new Map({
            target: "map",
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: center, // Sử dụng tọa độ đã chuyển đổi
                zoom: 12, // Mức zoom
            }),
        });

        // Xử lý sự kiện click trên bản đồ
        map.on("click", (evt) => {
            console.log(evt.pixel);
        });

        return () => {
            map.setTarget(""); // Xóa bản đồ khi component unmount
        };
    }, []);

    return <div id="map" className="w-full h-[500px] max-md:h-[500px]"></div>;
};

export default MapComponent;
