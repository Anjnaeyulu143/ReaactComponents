import { Data } from "../RelevelHeader/Data";

export const increment = "INCREMENT";
export const decrement = "DECREMENT";
export const filterData = "FILTER_DATA";
export const deleteData = "DELETE_DATA";

export function addNum(n) {
  return {
    type: increment,
    payload: n,
  };
}

export function removenNum(n) {
  return {
    type: decrement,
    payload: n,
  };
}

export const filterdata = (name) => {
  console.log(name);

  return {
    type: filterData,
    payload: name,
  };
};

export const deletedData = (id) => {
  return {
    type: deleteData,
    payload: id,
  };
};
