import style from './runningLine.module.css';

export default function RunningLine(){

    return <div className={style.running_line}>
        <ul className={style.running_line_list}>
            <li className={style.running_line__item}>
                    <span>Tank Top</span>
            </li>
             <li className={style.running_line__item}>
                    <span>T-Shirt</span>
            </li>
             <li className={style.running_line__item}>
                    <span>Long-Sleeve T-Shir</span>
            </li>
             <li className={style.running_line__item}>
                    <span>Raglan Sleeve Shirt</span>
            </li>
             <li className={style.running_line__item}>
                    <span>Crop Top</span>
            </li>
             <li className={style.running_line__item}>
                    <span>V-Neck Shirt</span>
            </li>
             <li className={style.running_line__item}>
                    <span>Muscle Shirt</span>
            </li>
    </ul>
    </div>
}