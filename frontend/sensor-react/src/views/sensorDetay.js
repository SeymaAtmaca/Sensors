import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from "react-bootstrap";

const SensorDetay = () => {

  const [sensors, setSensors] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/sensors/logs")
      .then(response => {
        if (response.data.success) {
          setSensors(response.data.data);
        }
      });
  }, []);

  {
    sensors.length > 0 && sensors.map((sensor, index) => {
      setTimeout(function () {

        const datenew = new Date();
        const year = datenew.getFullYear();
        const month = datenew.getMonth();
        const day = datenew.getDay();
        const hour = datenew.getHours();
        const minute = datenew.getMinutes();
        const date = day + "/" + month + "/" + year + "--" + hour + ":" + minute;

        const randInt = Math.floor(Math.random() * 4);

        const id = sensor.id;
        const log_nw = [{
                log: randInt,
                date: date
              }]
        sensors.inserOne({"_id": id}, {"$set": {"log": log_nw}})
      }, sensor.report_interval)

    })
  }

  const datenew = new Date();
        const year = datenew.getFullYear();
        const month = datenew.getMonth();
        const day = datenew.getDay();
        const hour = datenew.getHours();
        const minute = datenew.getMinutes();
        const date = day + "/" + month + "/" + year + "--" + hour + ":" + minute;
      
        const randInt = Math.floor(Math.random() * 4);

  return (

    

    <Table striped bordered hover size="sm">

      <thead>
        <tr>
          <th>Sensor detay deger</th>
          <th>Sensor konumu</th>
          <th>Sensor raporlama sıklığı</th>
          <th>Zaman damgasi</th>
          <th>Log Degeri</th>

        </tr>
      </thead>
      <tbody>
        {sensors.length > 0 && sensors.map((sensor, index) => {
          return (
            <tr key={index}>
              <td>{sensor.sensor_name}</td>
              <td>{sensor.locx}, {sensor.locy}</td>
              <td>{sensor.report_interval}</td>
              <td>{date}</td>
              <td>{randInt}</td>
            </tr>
          );
        })}

      </tbody>

    </Table>

  );
};

export default SensorDetay;