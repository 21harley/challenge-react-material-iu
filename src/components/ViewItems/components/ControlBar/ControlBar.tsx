import * as React from 'react';
import Rating from '@mui/material/Rating';
import './ControlBar.scss';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ControlBarType } from '../../../../interfaces/TypeStore';
import TextField from '@mui/material/TextField';

export default function ControlBar(
    // eslint-disable-next-line @typescript-eslint/ban-types
    {controlBar,stateControl, setstateControl}: {controlBar:ControlBarType,stateControl:ControlBarType,setstateControl:Function}
    ){
    const [value, setValue] = React.useState<number | null>(0);
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string);
      setstateControl({...stateControl,isFavorite:event.target.value})
    };
    const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        const aux = (event.target.checked)
        ?[...stateControl.brand,event.target.value]
        :stateControl.brand.filter((item)=>item!==event.target.value);
        setstateControl({...stateControl,brand:aux})
    };
    
    const handleCheckPrice = (targe:string,type:number) => {
        const value = parseInt(targe);
        (type===1)
        ?setstateControl({...stateControl,rate:[value,stateControl.rate[1]]})
        :setstateControl({...stateControl,rate:[stateControl.rate[0],value]})
    };
    
    const handleCheckRating = (newValue:number | null) => {
        setstateControl({...stateControl,review_number:newValue})
    };
    return (
        <div className='container-control-bar'>
            <div className='container-control-bar-filter-select'>
                <h3>Ordenar por</h3>
               <FormControl fullWidth className='formControl-select'>
                   <InputLabel id="demo-simple-select-label">Mejores reviews</InputLabel>
                   <Select
                     labelId="demo-simple-select-label"
                     id="demo-simple-select"
                     value={age}
                     onChange={handleChange}
                   >
                     <MenuItem value={"Favorito"}>Favorito</MenuItem>
                     <MenuItem value={"Mejores reviews"}>Mejores reviews</MenuItem>
                   </Select>
               </FormControl>
            </div>
            <ul className='list-style-none list-Control-Bar'>
                <li>
                    <h3>Marcas</h3>
                    <div className='list-Control-checkbok'>
                       {
                        controlBar.brand.map((item,index)=>{
                            return (
                                <div key={index}>
                                    <Checkbox  
                                        value={item}
                                        onChange={handleCheck}
                                        
                                     />
                                    <label>{item}</label>
                                </div>
                            )
                        })
                       }
                    </div>
                </li>
                <li>
                    <h3>Precios</h3>
                    <div className='costRate'>
                        <TextField
                            id="outlined-number"
                            label={controlBar.rate[0].toString()}
                            size="small"
                            minRows={1}
                            maxRows={controlBar.rate[1]}
                            value={stateControl.rate[0]}
                            onChange={(e)=>{handleCheckPrice(e.target.value,1)}}
                            type="number"
                            InputLabelProps={{
                            shrink: true,
                        }}
                        />
                        <hr/>
                        <TextField
                            id="outlined-number"
                            size="small"
                            minRows={1}
                            maxRows={controlBar.rate[1]}
                            value={stateControl.rate[1]}
                            label={controlBar.rate[1].toString()}
                            type="number"
                            onChange={(e)=>{handleCheckPrice(e.target.value,2)}}
                            InputLabelProps={{
                            shrink: true,
                        }}
                        />
                    </div>
                </li>
                <li>
                    <h3>Reviews</h3>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                            handleCheckRating(newValue);
                        }}
                      />
                </li>
                <li>
                  <h3>Memoria</h3>
                </li>
                <li>
                  <h3>Rango</h3>
                </li>
                <li>
                  <h3>Cámara</h3>
                </li>
            </ul>
        </div>
      );
    }