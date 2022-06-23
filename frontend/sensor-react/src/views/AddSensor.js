import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const AddSensor = () => {
  const [newSensorInfo, setNewSensorInfo] = useState({
    locx: 0,
    locy: 0,
    sensor_name: "O2",
    report_interval: 0,
  });

  const [isAdded, setIsAdded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAdded(false);
    axios
      .post("http://localhost:5000/api/sensors/new", newSensorInfo)
      .then((response) => {
        if (response.data.success) {
          setNewSensorInfo({
            locx: 0,
            locy: 0,
            sensor_name: "O2",
            report_interval: 0,
          });
          setIsAdded(true);
        }
      });
  };

  return (
    <>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>X Koordinatı</Form.Label>
          <Form.Control
            value={newSensorInfo.locx}
            onChange={(e) =>
              setNewSensorInfo({ ...newSensorInfo, locx: e.target.value })
            }
            type="number"
            placeholder="X koordinatı"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Y Koordinatı</Form.Label>
          <Form.Control
            value={newSensorInfo.locy}
            onChange={(e) =>
              setNewSensorInfo({ ...newSensorInfo, locy: e.target.value })
            }
            type="number"
            placeholder="Y koordinatı"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Veri Sıklığı</Form.Label>
          <Form.Control
            value={newSensorInfo.report_interval}
            onChange={(e) =>
              setNewSensorInfo({
                ...newSensorInfo,
                report_interval: e.target.value,
              })
            }
            type="number"
            placeholder="Veri Sıklığı"
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Sensör Tipi</Form.Label>
          <Form.Control
            value={newSensorInfo.sensor_name}
            onChange={(e) =>
              setNewSensorInfo({
                ...newSensorInfo,
                sensor_name: e.target.value,
              })
            }
            as="select"
            defaultValue="O2"
          >
            <option value="O2">O2</option>
            <option value="CO2">CO2</option>
            <option value="Duman">Duman</option>
            <option value="Toz">Toz</option>
          </Form.Control>
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Ekle
        </Button>
      </Form>
      <br />
      {isAdded ? <Alert>Sensör başarıyla eklendi!</Alert> : null}
    </>
  );
};

export default AddSensor;
