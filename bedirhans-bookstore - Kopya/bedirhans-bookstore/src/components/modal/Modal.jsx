import { Link } from "react-router-dom";
import Rating from "../book-slider/Rating";
import "./modal.css";
import {useState,useContext} from "react";
import BookStoreContext from "../../context/bookStorContext";

const Modal = ({ bookData, setOpenModal }) => 
  {
  const { addToCart } = useContext(BookStoreContext);
  const [qty, setQty] = useState(1);

  const {title,image, author,price,rating,reviews,inStock,id,} = bookData;

  return (
    <div >
      
    </div>
  );
};

export default Modal;
