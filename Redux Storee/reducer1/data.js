import { deleteData, filterData } from "../components/action1";
import { Data } from "../components/RelevelHeader/Data";

const usersData = [...Data];

const dataReducer = (state = usersData, action) => {
  switch (action.type) {
    case filterData:
      // console.log(action.payload);
      // const filterNames = state.filter((item) =>
      //   item.title.includes(action.payload)
      // );
      // console.log(filterNames);
      // return (state = [...filterNames]);
      const filterNames = state.filter((item) =>
        item.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      console.log(action.payload);
      return (state = [...filterNames]);
    case deleteData:
      const idFilter = state.filter((item) => item.id !== action.payload);
      // console.log(idFilter);
      return (state = [...idFilter]);

    default:
      return state;
  }
};

export default dataReducer;
