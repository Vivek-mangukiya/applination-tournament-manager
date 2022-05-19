import React, { useEffect, useContext, useState } from 'react';
import '../assets/styles/PlayerListComponent.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import backIcon from '../assets/images/icon-menu-back.svg';
import cardIcon from '../assets/images/icon-menu-cards.svg';
import listIcon from '../assets/images/icon-menu-list-disable.svg';
import iconavatarpools from '../assets/images/icon-avatar-pools.svg';
import iconavatarpoints from '../assets/images/icon-avatar-points.svg';
import iconavatardivision from '../assets/images/icon-avatar-division.svg';
// import searchicon from '../assets/images/icon-sidemenu-search.svg';
import filterarrow from '../assets/images/icon-filter-arrow.svg';
import avatar from '../assets/images/defaultIcon2.png';
import TemplateForm from './TemplateFormComponent';
import TemplateListContext from '../context/templateList/templateListContext';
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from 'react-virtualized';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';

const TemplateListComponent = (props) => {
  const templateListContext = useContext(TemplateListContext);
  const { getAllTemplates, 
          tempListData, 
          getTempErr,
          templateLoading,
        //   UpdateEventId,
        //   getTournamentById, 
        } = templateListContext;

    
  // const [commonState, setCommonState] = useState({
  //   tempListData: [],
  // });

  const [searchTerm, setSearchTerm] = useState('');
  const [information, setinformation] = useState(null);

 
  useEffect(() => {
    getAllTemplates();
    // console.log('PlyerListItemDatac', tempListData);
  }, []);






  // useEffect(() => {
  //   setCommonState((prevState) => ({ ...prevState, tempListData }));
  //   console.log('PlyerListItemData', tempListData);
  // }, [tempListData]);

  useEffect(() => {
    if (tempListData !== null) {
      // console.log(tempListData);
      setinformation(tempListData);
    }
  }, [tempListData]);

  // useEffect(() => {
  //   console.log(getTempErr);
  
  // }, [getTempErr]);

  const nameSort = () => {
    // document.getElementById('last').classList.remove('switch');
    document.getElementById('date').classList.remove('switch');
    // document.getElementById('mail').classList.remove('switch');
    document.getElementById('type').classList.remove('switch');
    document.getElementById('status').classList.remove('switch');
    // document.getElementById('score').classList.remove('switch');

    let classInfo = document
      .getElementById('icon')
      .classList.contains('switch');

    if (classInfo === true) {
      document.getElementById('icon').classList.remove('switch');
      // console.log(mdata);
      let obj = [...tempListData];

      obj.sort((x, y) => {
        if (x.name.toLowerCase() < y.name.toLowerCase()) return -1;
        if (x.name.toLowerCase() > y.name.toLowerCase()) return 1;
        else return 0;
      });
      // console.log(obj);
      setinformation(obj);
    } else {
      document.getElementById('icon').classList.add('switch');
      // console.log(tempListData);
      let obj = [...tempListData];

      obj.sort((x, y) => {
        if (x.name.toLowerCase() > y.name.toLowerCase()) return -1;
        if (x.name.toLowerCase() < y.name.toLowerCase()) return 1;
        else return 0;
      });
      // console.log(obj);
      setinformation(obj);
    }
  };


  const dateSort = () => {
    document.getElementById('icon').classList.remove('switch');
    // document.getElementById('last').classList.remove('switch');
    // document.getElementById('mail').classList.remove('switch');
    document.getElementById('type').classList.remove('switch');
    document.getElementById('status').classList.remove('switch');
    // document.getElementById('score').classList.remove('switch');

    let classInfo = document
      .getElementById('date')
      .classList.contains('switch');

    if (classInfo === true) {
      document.getElementById('date').classList.remove('switch');
      // console.log(mdata);
      let obj = [...tempListData];

      obj.sort((x, y) => {
        if (x.created_at.replace('/', '') < y.created_at.replace('/', '')) return -1;
        if (x.created_at.replace('/', '') > y.created_at.replace('/', '')) return 1;
        else return 0;
      });
      // console.log(obj);
      setinformation(obj);
    } else {
      document.getElementById('date').classList.add('switch');
      // console.log(tempListData);
      let obj = [...tempListData];

      obj.sort((x, y) => {
        if (x.created_at.replace('/', '') > y.created_at.replace('/', '')) return -1;
        if (x.created_at.replace('/', '') < y.created_at.replace('/', '')) return 1;
        else return 0;
      });
      // console.log(obj);
      setinformation(obj);
    }
  };

  const typeSort = () => {
    document.getElementById('icon').classList.remove('switch');
    // document.getElementById('last').classList.remove('switch');
    document.getElementById('date').classList.remove('switch');
    // document.getElementById('mail').classList.remove('switch');
    document.getElementById('status').classList.remove('switch');
    // document.getElementById('score').classList.remove('switch');

    let classInfo = document
      .getElementById('type')
      .classList.contains('switch');

    if (classInfo === true) {
      document.getElementById('type').classList.remove('switch');
      // console.log(mdata);
      let obj = [...tempListData];

      obj.sort((x, y) => {
        if (x.type.toLowerCase() < y.type.toLowerCase()) return -1;
        if (x.type.toLowerCase() > y.type.toLowerCase()) return 1;
        else return 0;
      });
      // console.log(obj);
      setinformation(obj);
    } else {
      document.getElementById('type').classList.add('switch');
      // console.log(mdata);
      let obj = [...tempListData];

      obj.sort((x, y) => {
        if (x.type.toLowerCase() > y.type.toLowerCase()) return -1;
        if (x.type.toLowerCase() < y.type.toLowerCase()) return 1;
        else return 0;
      });
      // console.log(obj);
      setinformation(obj);
    }
  };

  const statusSort = () => {
    document.getElementById('icon').classList.remove('switch');
    // document.getElementById('last').classList.remove('switch');
    document.getElementById('date').classList.remove('switch');
    // document.getElementById('mail').classList.remove('switch');
    document.getElementById('type').classList.remove('switch');
    // document.getElementById('score').classList.remove('switch');

    let classInfo = document
      .getElementById('status')
      .classList.contains('switch');

    if (classInfo === true) {
      document.getElementById('status').classList.remove('switch');
      // console.log(tempListData);
      let obj = [...tempListData];
      //  console.log(obj)
      obj.sort((x, y) => {
        if (x.status < y.status) return -1;
        if (x.status > y.status) return 1;
        else return 0;
      });
      // console.log(obj)
      setinformation(obj);
    } else {
      document.getElementById('status').classList.add('switch');
      // console.log(tempListData);
      let obj = [...tempListData];
      // console.log(obj)
      obj.sort((x, y) => {
        if (x.status > y.status) return -1;
        if (x.status < y.status) return 1;
        else return 0;
      });
      // console.log(obj);
      setinformation(obj);
    }
  };



  const handleChange = (event) => {
    // console.log(event.target.value)
    setSearchTerm(event.target.value);
    let info = tempListData.filter((data) => {
      if (searchTerm === '') {
        return data;
      } else if (
        data.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
      ) {
        return data;
      } else if (
        data.type.toString().toLowerCase().includes(searchTerm .toString().toLowerCase().trim())
      ) {
        return data;
      } else if (
        data.created_at
          .toString()
          .toLowerCase()
          .includes(searchTerm.toString().toLowerCase().trim())
      ) {
        return data;
      } else if (
        data.status
          .toString()
          .toLowerCase()
          .includes(searchTerm.toString().toLowerCase().trim())
      ) {
        return data;
      } 
    });
    // console.log(info)
    if (event.target.value !== '') {
      setinformation(info);
    } else {
      setinformation(tempListData);
    }
  };

  const openProfile = async (template) => {
    // console.log('template type:', template.type);
    if (template.type === 'Division') {
      // await getTemplate(template.id, template.type);
      // // await console.log("Selected template data:",templateData)
      // await updateTemplateId(template.id);
      await props.history.push(`/templateSaved/${template.id}`);
    }
    if (template.type === 'Pools') {
      await props.history.push(`/templatePoolsSaved/${template.id}`);
    }
    if (template.type === 'Points') {
      await props.history.push(`/templatePointsSaved/${template.id}`);
    }
    // await getRegById(regId);
    // await getManagerByIdList(managerId);
    // await console.log("Selected Manager:",getManagerData)
    // await props.history.push(`/regEvent/3751`);
  };

  const imageSelection = (type) => {
    if (type === 'Divison') {
      return iconavatardivision;
    } else if (type === 'Pools') {
      return iconavatarpools;
    } else {
      return iconavatarpoints;
    }
  };


  return (
    <div className="min-vh-100 player-list-component">
      <Header>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item" onClick={() => props.history.goBack()}>
            <a
              className="nav-link disabled"
              href="#/"
              tabIndex="-1"
              aria-disabled="true"
            >
              <img alt="menu" src={backIcon} className="profile-image" />
            </a>
          </li>
          <li
            className="nav-item"
            onClick={() => props.history.push('/DashboardTemplate')}
          >
            <a
              className="nav-link disabled"
              href="#/"
              tabIndex="-1"
              aria-disabled="true"
            >
              <img alt="menu" src={cardIcon} className="profile-image" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              href="#/"
              tabIndex="-1"
              aria-disabled="true"
            >
              <img alt="menu" src={listIcon} className="profile-image" />
            </a>
          </li>
        </ul>
      </Header>

      {information !== null && (
        <div style={{ marginTop: '1%', marginLeft: '10%', marginRight: '5%' }}>
          <div className="container p-0 m-0">
            {/* searchbar  */}
            <div className="col-12 m-0 p-0 d-flex justify-content-start">
              <input
                className="Box-Search"
                placeholder="Search"
                id="search"
                name=""
                onChange={handleChange}
                style={{ paddingLeft: 50 }}
              ></input>
            </div>

            <div className="col-12 m-0 p-0">
              <div className="row m-0 p-0 headerTable">
                {/* <div className="col-1  m-0 p-0 d-flex  align-items-center "></div> */}

                <div className="col-4   p-0 d-flex  align-items-center" style={{marginLeft:"1%"}}>
                  <img
                    id="icon"
                    className="trans"
                    src={filterarrow}
                    alt="arrow"
                    onClick={nameSort}
                    width="13px"
                  />
                  <span className="p-1">NAME</span>
                </div>


                <div className="col-3   m-0 p-0 d-flex  align-items-center ">
                  <img
                    id="type"
                    className="trans"
                    src={filterarrow}
                    alt="arrow"
                    width="13px"
                    onClick={typeSort}
                  />
                  <span className="p-1">TYPE</span>
                </div>

                <div className="col-2 m-0 p-0 d-flex  align-items-center">
                  <img
                    id="date"
                    className="trans"
                    src={filterarrow}
                    alt="arrow"
                    width="13px"
                    onClick={dateSort}
                  />
                  <span className="p-1">STARTS ON</span>
                </div>

                <div className="col-2 m-0 p-0 d-flex  align-items-center">
                  <img
                    id="status"
                    className="trans"
                    src={filterarrow}
                    alt="arrow"
                    width="13px"
                    onClick={statusSort}
                  />
                  <span className="p-1">STATUS</span>
                </div>
              </div>
            </div>

            {templateLoading ?(
               <div className="text-center loading-player-stying">
               <div className="my-auto py-2">
                 <LoadingSpinner/>
               </div>
             </div>
            ) : getTempErr !== null && getTempErr !== undefined ? (
            <div className="text-center loading-player-stying">
              <div className="my-auto py-2" style={{ color: '#ff2072'}}>
                 {getTempErr}
              </div>
            </div>
            ) : tempListData.length > 0  ? (
              <div className="col-12 p-0 m-0 customData">
                <AutoSizer>
                  {({ height, width }) => (
                    <List
                      width={width}
                      height={height}
                      rowHeight={55}
                      className="obj-container"
                      rowCount={information.length}
                      rowRenderer={({ key, index, style, parent }) => {
                        let info = information[index];
                        return (
                          <div
                            key={key}
                            style={{ ...style }}
                            className="row mx-0 px-0 my-1  rectangleTable"
                            onClick={() => {
                              openProfile(info);
                            }}
                          >
                            {/* <div className="col-1 d-flex justify-content-center align-items-center">
                              <img
                                src={imageSelection(info.type)}
                                onError={(e) => (e.target.src = avatar)}
                                alt=""
                                style={{
                                  width: 40,
                                  height: 40,
                                  borderRadius: '50%',
                                }}
                              />
                            </div> */}
                            <div className="col-4 d-flex justify-content-start align-items-center">
                              <img
                                  src={imageSelection(info.type)}
                                  onError={(e) => (e.target.src = avatar)}
                                  alt=""
                                  style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: '50%',
                                  }}
                                />
                              {info.name}
                            </div>
                            <div className="col-3  d-flex justify-content-start align-items-center">
                              {info.type}
                            </div>
                            <div className="col-2  d-flex justify-content-start align-items-center">
                              {info.created_at}
                            </div>
                            <div className="col-2 d-flex justify-content-start align-items-center">
                              {info.status}
                            </div>
                          </div>
                        );
                      }}
                    />
                  )}
                </AutoSizer>
              </div>
            ) :  (
              <div
                style={{
                  fontFamily: 'FuturaMedium',
                  marginTop: 20,
                  marginBottom: 20,
                }}
              >
               {getTempErr}
              </div>
            )
          }
          </div>
        </div>
      )}



      <Footer>
        <div className="m-0 col-auto d-flex align-items-center ml-auto">
          <TemplateForm propsData={props.history} type="table"></TemplateForm>
        </div>
      </Footer>
    </div>
  );
};

export default TemplateListComponent;

