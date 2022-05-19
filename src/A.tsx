import {FC} from "react"
import { BsBoxArrowUpRight } from 'react-icons/bs';

type Aprops = {href?: string, children: string};

const A : FC<Aprops> = (props) => {
  return (
    <a href={props.href}  className="flex justyfy-between sm:justify-center grow basis-0 sm:items-center space-x-1 text-blue-600 text-left ">
          <BsBoxArrowUpRight className="w-3 h-3" />
				<span className="flex flex-col text-sm sm:flex-row" >{props.children}</span>
        </a>
  );
};
export default A;