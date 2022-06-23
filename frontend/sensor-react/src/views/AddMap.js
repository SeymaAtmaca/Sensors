import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const AddMap = () => {
  const [newMapInfo, setNewMapInfo] = useState({
    locx: 0,
    locy: 0,
    radius: 0,
    count: 0,
  });

  const [isAdded, setIsAdded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAdded(false);
    axios
      .post("http://localhost:5000/api/map/newMap", newMapInfo)
      .then((response) => {
        if (response.data.success) {
          setNewMapInfo({
            locx: 0,
            locy: 0,
            radius: 0,
            count: 0,
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
            value={newMapInfo.locx}
            onChange={(e) =>
              setNewMapInfo({ ...newMapInfo, locx: e.target.value })
            }
            type="number"
            placeholder="X koordinatı"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Y Koordinatı</Form.Label>
          <Form.Control
            value={newMapInfo.locy}
            onChange={(e) =>
              setNewMapInfo({ ...newMapInfo, locy: e.target.value })
            }
            type="number"
            placeholder="Y koordinatı"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Yaricap</Form.Label>
          <Form.Control
            value={newMapInfo.radius}
            onChange={(e) =>
              setNewMapInfo({
                ...newMapInfo,
                radius: e.target.value,
              })
            }
            type="number"
            placeholder="Yaricap"
          />
        </Form.Group>

        

        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Sensor Sayisi</Form.Label>
          <Form.Control
            value={newMapInfo.count}
            onChange={(e) =>
              setNewMapInfo({ 
                ...newMapInfo, 
                count: e.target.value,
               })
            }
            type="number"
            placeholder="count"
          />
        </Form.Group>

        <br />
        <Button variant="primary" type="submit">
          Ekle
        </Button>
      </Form>
      <br />
      {isAdded ? <Alert>Harita başarıyla eklendi!</Alert> : null}
    </>
  );
};

export default AddMap;