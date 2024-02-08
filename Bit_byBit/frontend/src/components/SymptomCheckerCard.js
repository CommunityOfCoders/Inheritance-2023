import React, { useContext, useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  FormControl,
  InputLabel,
  Input,
  Select,
  MenuItem,
  InputAdornment,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { genContext } from '../contexts/GeneralContext';

const SymptomCheckerCard = () => {

  const { yearOfBirth, setYearOfBirth, gender, setGender, symptoms, setSymptoms } = useContext(genContext)
  const [dropdownSymptoms, setDropdownSymptoms] = useState([]);

  const handleSymptomChange = (event, index) => {
    const updatedSymptoms = [...symptoms];
    updatedSymptoms[index] = event.target.value;
    setSymptoms(updatedSymptoms);
  };

  const handleAddSymptomField = () => {
    setSymptoms((prevSymptoms) => [...prevSymptoms, '']);
  };

  const handleDeleteSymptom = (index) => {
    const updatedSymptoms = [...symptoms];
    updatedSymptoms.splice(index, 1);
    setSymptoms(updatedSymptoms);
  };

  const getAllSymptoms = async () => {
    const response = await fetch("/symptom/getallSymptoms");
    const json = await response.json();
    setDropdownSymptoms(json.data);
  };

  const handleSeeResults = async () => {
    localStorage.setItem('yob', JSON.stringify(yearOfBirth));
    localStorage.setItem('gender', JSON.stringify(gender));
    for (let i = 0; i < symptoms.length; i++) {
      if (symptoms[i] === '') {
        symptoms.splice(i, 1);
        i--;
      }
    }
    localStorage.setItem('symptoms', JSON.stringify(symptoms));
  };

  useEffect(() => {
    setYearOfBirth('');
    setGender('');
    setSymptoms(['']);
    localStorage.removeItem('yob');
    localStorage.removeItem('gender');
    localStorage.removeItem('symptoms');
    getAllSymptoms();
  }, []);

  return (
    <div className="bg-gray-100">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
        <Card style={{ width: '100%', maxWidth: '500px', padding: '16px' }}>
          <CardContent>
            <h4 className='font-extrabold'>Symptom Checker</h4>
            <form>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel htmlFor="year-of-birth" shrink>
                  Age
                </InputLabel>
                <Input
                  id="year-of-birth"
                  type="number"
                  value={yearOfBirth}
                  onChange={(e) => setYearOfBirth(e.target.value)}
                  startAdornment={
                    <InputAdornment position="start">
                      {!yearOfBirth}
                    </InputAdornment>
                  }
                  style={{ marginBottom: '8px' }}
                />
              </FormControl>

              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select
                  label="Gender"
                  labelId="gender-label"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>

              <Typography variant="subtitle1" gutterBottom>
                Select Symptoms:
              </Typography>

              {symptoms.map((symptom, index) => (
                <div key={index} className='flex items-center justify-between mb-4'>
                  <FormControl fullWidth variant="outlined" margin="normal">
                    <InputLabel id={`symptom-label-${index}`} className="text-gray-500">
                      Symptom {index + 1}
                    </InputLabel>
                    <Select
                      label={`Symptom ${index + 1}`}
                      labelId={`symptom-label-${index}`}
                      value={symptom}
                      onChange={(e) => handleSymptomChange(e, index)}
                      MenuProps={{
                        PaperProps: {
                          style: {
                            maxHeight: '150px', // Set the max height as needed
                          },
                        },
                      }}
                      className="w-full"
                    >
                      {dropdownSymptoms.map((option) => (
                        <MenuItem key={option.ID} value={option.ID}>
                          {option.Name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <div className='ml-4'>
                    <Button
                      onClick={() => handleDeleteSymptom(index)}
                      variant="contained"
                      color="primary"
                      style={{ backgroundColor: '#4CAF50' }}
                    >
                      <img className='text-sm invert' src="https://i.ibb.co/LY733HK/image.png" alt="" />
                    </Button>
                  </div>
                </div>
              ))}

              <Box mt={2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddSymptomField}
                  size="small"
                  style={{ backgroundColor: '#4CAF50' }}
                >
                  Add More Symptoms
                </Button>
              </Box>

              <Box mt={2}>
                <Button variant="contained" color="primary" onClick={handleSeeResults} fullWidth style={{ backgroundColor: '#4CAF50' }}>
                  <Link className='w-ful h-full' to='/symptomres'>See Results</Link>
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SymptomCheckerCard;