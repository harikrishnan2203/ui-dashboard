import React from "react";
import "./Input.css";

export default function SearchComponent(props) {
    return (
      <div>
        <input
          type={props.type}
          id={props.id}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
          required
        />
        <div class="">{props.error}</div>
      </div>
    );
  }