import {Tstate} from "../../Config/TypeScript/Types";
import './MeasurementControls.scss';
import {useSelector, useDispatch} from "react-redux";
import {setLengthUnit, setTemperatureUnit} from '../../Redux/actions';


const MeasurementControls = () => {
    const active_length = useSelector((state: Tstate) => state.length_unit);
    const active_temp = useSelector((state: Tstate) => state.temperature_unit);
    const dispatch = useDispatch();

    const length_options = ["km", "miles"];
    const temp_options = ["celsius", "fahrenheit", "kelvin"];

    const create_button = (text: string, active: string, func: Function) => <button key={text}
                                                                                    onClick={() => dispatch(func(text))}
                                                                                    className={text === active ? "btn btn--active" : "btn"}>
        {text}
    </button>

    const length_buttons = length_options.map(length => create_button(length, active_length, setLengthUnit))
    const temp_buttons = temp_options.map(temp => create_button(temp, active_temp, setTemperatureUnit))

    return (
        <div className="MeasurementControls">
            <p>I use {length_buttons} and {temp_buttons}  </p>
        </div>
    );
};

export default MeasurementControls;