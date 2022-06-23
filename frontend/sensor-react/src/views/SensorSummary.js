import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from "react-bootstrap";

const SensorSummary = () => {
  const [sensors, setSensors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/sensors")
    .then(response => {
        if (response.data.success) {
            setSensors(response.data.data);
          }
    });
  }, []);

  const deleteFunction = (id) => {
    axios.delete(`http://localhost:5000/api/sensors/delete/${id}`)
    .then(response => {
        if (response.data.success) {
            setSensors([...sensors.filter(x => x._id !== id)]);
          }
    });
  }

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Tür</th>
          <th>X Koordinatı</th>
          <th>Y Koordinatı</th>
          <th>Tekrar Sıklığı</th>
          <th>İşlemler</th>
        </tr>
      </thead>
      <tbody>
        {sensors.length > 0 && sensors.map((sensor,index) => {
          return (
            <tr key={index}>
              <td>{sensor.sensor_name}</td>
              <td>{sensor.locx}</td>
              <td>{sensor.locy}</td>
              <td>{sensor.report_interval}</td>
              <td>
              <Button onClick={() => deleteFunction(sensor._id)} variant="danger">Sil</Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default SensorSummary;
