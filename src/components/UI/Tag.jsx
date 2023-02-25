import './Tag.css'
function Tag (props){
   return <div className={`tag ${props.color} ${props.className} w-fit rounded h-fit font-bold text-xs mr-2`} >{props.children}</div>;
}
 
export default Tag