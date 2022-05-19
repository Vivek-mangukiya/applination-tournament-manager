// import React ,{useCallback,useState,useEffect} from 'react';
// import Header from './header/Header';
// import backIcon from '../assets/images/icon-menu-back.svg';
// import Footer from '../components/footer/Footer';
// import iconorangeid from '../assets/images/id.png';
// import { Link } from 'react-router-dom';
// import '../assets/styles/DashboardNone.css'
// import './DDmenu/DDmenu';
// import DDmenu from './DDmenu/DDmenu';
// import BracketMatchBox from '../components/BracketMatchBox/BracketMatchBox';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// const getItems = (count, offset = 0) =>
//     Array.from({ length: count }, (v, k) => k).map(k => ({
//         id: `item-${k + offset}`,
//         content: `item ${k + offset}`
//     }));

// // a little function to help us with reordering the result
// const reorder = (list, startIndex, endIndex) => {
//     const result = Array.from(list);
//     const [removed] = result.splice(startIndex, 1);
//     result.splice(endIndex, 0, removed);

//     return result;
// };

// /**
//  * Moves an item from one list to another list.
//  */
// const move = (source, destination, droppableSource, droppableDestination) => {
//     const sourceClone = Array.from(source);
//     const destClone = Array.from(destination);
//     const [removed] = sourceClone.splice(droppableSource.index, 1);

//     destClone.splice(droppableDestination.index, 0, removed);

//     const result = {};
//     result[droppableSource.droppableId] = sourceClone;
//     result[droppableDestination.droppableId] = destClone;
//     console.log("Move result",result)

//     return result;
// };

// const grid = 8;

// const getItemStyle = (isDragging, draggableStyle) => ({
//     // some basic styles to make the items look a bit nicer
//     userSelect: 'none',
//     padding: grid * 2,
//     margin: `0 0 ${grid}px 0`,

//     // change background colour if dragging
//     background: isDragging ? 'lightgreen' : 'grey',

//     // styles we need to apply on draggables
//     ...draggableStyle
// });

// const getListStyle = isDraggingOver => ({
//     background: isDraggingOver ? 'lightblue' : 'lightgrey',
//     padding: grid,
//     width: 250
// });

// const MembershipNone=(props)=> {

// const [lists, setLists] = useState({
//   droppable: getItems(10),
//   droppable2: getItems(5, 10)
// })

// const onDragEnd = result => {
//     const { source, destination } = result;
//     console.log(source)
//     console.log(destination)

//     // dropped outside the list
//     if (!destination) {
//         return;
//     }

//     if (source.droppableId === destination.droppableId) {
//         const items = reorder(
//             lists[source.droppableId],
//             source.index,
//             destination.index
//         );

//         setLists((prevState)=>({
//           ...prevState,
//           [source.droppableId]:items
//         }))
//     } else {
//       console.log(lists[source.droppableId])
//         const result = move(
//             lists[source.droppableId],
//             lists[destination.droppableId],
//             source,
//             destination
//         );

//         setLists({
//             droppable: result.droppable,
//             droppable2: result.droppable2
//         });
//     }
// };

// useEffect(() => {
// console.log(lists)
// }, [lists])

  
//     return (
//         <div>
//             <>
//     {/* <div className="App">
//       <header className="App-header">
//         <div className="d-flex">
//         <DragDropContext onDragEnd={onDragEnd}>
//                 <Droppable droppableId="droppable">
//                     {(provided, snapshot) => (
//                         <div
//                             ref={provided.innerRef}
//                             style={getListStyle(snapshot.isDraggingOver)}>
//                             {lists.droppable.map((item, index) => (
//                                 <Draggable
//                                     key={item.id}
//                                     draggableId={item.id}
//                                     index={index}>
//                                     {(provided, snapshot) => (
//                                         <div
//                                             ref={provided.innerRef}
//                                             {...provided.draggableProps}
//                                             {...provided.dragHandleProps}
//                                             style={getItemStyle(
//                                                 snapshot.isDragging,
//                                                 provided.draggableProps.style
//                                             )}>
//                                             {item.content}
//                                         </div>
//                                     )}
//                                 </Draggable>
//                             ))}
//                             {provided.placeholder}
//                         </div>
//                     )}
//                 </Droppable>
//                 <Droppable droppableId="droppable2">
//                     {(provided, snapshot) => (
//                         <div
//                             ref={provided.innerRef}
//                             style={getListStyle(snapshot.isDraggingOver)}>
//                             {lists.droppable2.map((item, index) => (
//                                 <Draggable
//                                     key={item.id}
//                                     draggableId={item.id}
//                                     index={index}>
//                                     {(provided, snapshot) => (
//                                         <div
//                                             ref={provided.innerRef}
//                                             {...provided.draggableProps}
//                                             {...provided.dragHandleProps}
//                                             style={getItemStyle(
//                                                 snapshot.isDragging,
//                                                 provided.draggableProps.style
//                                             )}>
//                                             {item.content}
//                                         </div>
//                                     )}
//                                 </Draggable>
//                             ))}
//                             {provided.placeholder}
//                         </div>
//                     )}
//                 </Droppable>
//             </DragDropContext>
//         </div>
//       </header>
//       <p>
//         Images from <a href="https://final-space.fandom.com/wiki/Final_Space_Wiki">Final Space Wiki</a>
//       </p>
//     </div> */}
//             </>
//         </div>
//     );
// }

// export default MembershipNone;

import React ,{useCallback,useState} from 'react';
import Header from './header/Header';
import backIcon from '../assets/images/icon-menu-back.svg';
import Footer from '../components/footer/Footer';
import iconorangeid from '../assets/images/id.png';
import { Link } from 'react-router-dom';
import '../assets/styles/DashboardNone.css'
import './DDmenu/DDmenu';
import DDmenu from './DDmenu/DDmenu';

const MembershipNone=(props)=> {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleDDChange = (n, val) => {

        setIsSubmitting(false);
        var errs = errors;
    
        delete errs[n];
    
        setValues((values) => ({
          ...values,
          [n]: val,
        }));
    
      };

    const setValFromDD = useCallback((field, val) => {
        console.log("got callback");
        console.log("field: ", field);
        console.log("val: ", val);
        handleDDChange(field, val);
      }, []);
    

    const sizeitems = [
        { value: 56, text: "XS" },
        { value: 57, text: "S" },
        { value: 58, text: "M" },
        { value: 59, text: "L" },
        { value: 60, text: "XL" },
        { value: 61, text: "XXL" },
        { value: 62, text: "XXXL" },
      ];

    const onSave=()=>{
        console.log("ONSAVE")
    }
    return (
        <div>
            <>
                <Header>
                    <ul className="navbar-nav mr-auto">
                        <li
                        className="nav-item"
                        onClick={() => this.props.history.goBack()}
                        >
                        <a
                            className="nav-link disabled"
                            href="#/"
                            tabIndex="-1"
                            aria-disabled="true"
                        >
                            {/* <img alt="menu" src={backIcon} className="profile-image" /> */}
                        </a>
                        </li>
                    </ul>
                </Header>

                <div className="container none-screen">
                    <div className="row">
                        <div className="col-12 text-center dashboard-none-image">
                            <img src={iconorangeid} alt="" className="image-fluid"/>
                        </div>
                        <div className="col-12 text-center dashboard-none-data ">
                            Looks like you haven’t any memberships assigned yet. Start by assigning a
                            &nbsp;<span className="none-screen-highlight">New Memebership</span> 
                            {/* <Link to="/newEventProfile" href="#/" className="li-link dashboard-none-data-link">
                            New Membership.
                            </Link> */}
                        </div>
                        <Footer>
                            <div className="col-12 text-right m-auto" style={{backgroundColor:'pink'}}
                                // onMouseOver={onSave}
                                onMouseLeave={onSave}
                                >
                            {/* <button
                                type="button"
                                id="white-button-hover"
                                className="btn-sm mr-2"
                                style={{
                                border: '1px solid #ffd420',
                                borderRadius: 15,
                                width: 112,
                                fontSize: 10,
                                height: 24,
                                backgroundColor: '#f9fafc',
                                outline: 0,
                                color:'4a4a4a'
                                }}
                                // onClick={onOpenModal}
                            >
                                CANCEL
                            </button> */}
                            <button
                                className="btn-sm pb-1 NewPlayerButton"
                                id="yellow-button-hover"
                                style={{
                                border: '1px solid yellow',
                                borderRadius: 15,
                                width: 137,
                                height: 24,
                                fontSize: 10,
                                backgroundColor: '#ffd420',
                                outline: 0,
                                color:'#4a4a4a'
                                }}
                                // onClick={onSave}
                            >
                                NEW MEMBERSHIP
                            </button>
                            </div>
                        </Footer>
                        {/* <hr className="col-12 p-0 m-0"/>
                        <div className="NoneButton col-12 text-right">
                            <Link href="#/" className="li-link">
                                <div className=" NewPlayerButtonD align-right">
                                    <div className="NewPlayerButtonText">NEW MEMBERSHIP</div>                               
                                </div>
                            </Link>
                        </div> */}
                    </div>
                </div>
            </>
        </div>
    );
}

export default MembershipNone;