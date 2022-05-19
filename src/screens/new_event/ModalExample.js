import React, { useEffect, useState } from 'react';
import Footer from '../../components/footer/Footer';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const ModalExample = (props) => {
  // modal states and functions start
  const [open, setOpen] = useState(false);
  const [templateOptionModal, setTemplateOptionModal] = useState(false);
  const [templateOptionState, setTemplateOptionState] = useState('');

  //points
  const [pointsFirstModal, setPointsFirstModal] = useState(false);
  const [pointsFirstState, setPointsFirstState] = useState('1');
  const [pointsSecondModal, setPointsSecondModal] = useState(false);
  const [pointsSecondState, setPointsSecondState] = useState('');

  //pools
  const [poolsFirstModal, setPoolsFirstModal] = useState(false);
  const [poolsFirstState, setPoolsFirstState] = useState('1');
  const [poolsSecondModal, setPoolsSecondModal] = useState(false);
  const [poolsSecondState, setPoolsSecondState] = useState('1');
  const [poolsThirdModal, setPoolsThirdModal] = useState(false);
  const [poolsThirdState, setPoolsThirdState] = useState('1');
  const [poolsForthModal, setPoolsForthModal] = useState(false);
  const [poolsForthState, setPoolsForthState] = useState('');

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  //  modal states and functions end

  useEffect(() => {
    if (templateOptionModal) {
      setOpen(false);
    }
    if (pointsFirstModal) {
      setTemplateOptionModal(false);
    }
    if (pointsSecondModal) {
      setPointsFirstModal(false);
    }
    if (poolsFirstModal) {
      setTemplateOptionModal(false);
    }
    if (poolsSecondModal) {
      setPoolsFirstModal(false);
    }
    if (poolsThirdModal) {
      setPoolsSecondModal(false);
    }
    if (poolsForthModal) {
      setPoolsThirdModal(false);
    }
  }, [
    templateOptionModal,
    pointsFirstModal,
    pointsSecondModal,
    poolsFirstModal,
    poolsSecondModal,
    poolsThirdModal,
    poolsForthModal,
  ]);
  return (
    <div>
      {/* footer */}
      <Footer>
        <div className="m-0 col-auto ml-auto mt-3" onClick={onOpenModal}>
          <div className="lower-back-button">
            <span className="lower-back-button-text">CANCEL</span>
          </div>
        </div>
        <div className="m-0 col-auto mt-3">
          <div className="lower-back-button">
            <span className="lower-back-button-text">SAVE</span>
          </div>
        </div>
      </Footer>

      {/* modal */}
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        styles={{
          modal: {
            borderRadius: 12,
            boxShadow: '0 1 2 0 rgba(0,0,0,0.2',
          },
        }}
      >
        <div
          className="text-center"
          style={{
            marginTop: 62,
            fontFamily: 'Futura',
            fontSize: 14,
            fontWeight: 'bold',
            fontStretch: 'normal',
            fontStyle: 'normal',
            letterSpacing: 'normal',
            color: '#4a4a4a',
          }}
        >
          Are your sure you want to cancel?
        </div>
        <p
          className="text-center"
          style={{
            marginTop: 8,
            fontFamily: 'Futura',
            fontWeight: 'bold',
            fontStretch: 'normal',
            fontStyle: 'normal',
            letterSpacing: 'normal',
            color: '#9b9b9b',
          }}
        >
          All changes will not be saved and progress will be lost.
        </p>
        <div className="row container" style={{ marginTop: 79 }}>
          <div className="col-12 text-center m-auto">
            <button
              type="button"
              className="btn-sm ml-5"
              style={{
                border: '1px solid yellow',
                borderRadius: 15,
                width: 112,
                height: 30,
                backgroundColor: '#ffd420',
                outline: 0,
              }}
            >
              PREVIOUS
            </button>
            <button
              className="btn-sm pb-1 ml-1"
              style={{
                border: '1px solid yellow',
                borderRadius: 15,
                width: 112,
                height: 30,
                backgroundColor: '#ffd420',
                outline: 0,
              }}
              onClick={() => setTemplateOptionModal(true)}
            >
              NEXT
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        open={templateOptionModal}
        onClose={() => setTemplateOptionModal(false)}
        center
        styles={{
          modal: {
            borderRadius: 12,
            boxShadow: '0 1 2 0 rgba(0,0,0,0.2',
          },
        }}
      >
        <div
          className="text-center"
          style={{
            marginTop: 62,
            fontFamily: 'Futura',
            fontSize: 14,
            fontWeight: 'bold',
            fontStretch: 'normal',
            fontStyle: 'normal',
            letterSpacing: 'normal',
            color: '#4a4a4a',
          }}
        >
          Choose the options
        </div>
        <div
          className="text-center"
          style={{
            marginTop: 8,
            fontFamily: 'Futura',
            fontWeight: 'bold',
            fontStretch: 'normal',
            fontStyle: 'normal',
            letterSpacing: 'normal',
            color: '#9b9b9b',
          }}
        >
          <form>
            <select
              className="form-control"
              value={templateOptionState}
              onChange={(e) => setTemplateOptionState(e.target.value)}
            >
              <option value="" disabled>
                Choose
              </option>
              <option value="points">Points</option>
              <option value="pools">Pools</option>
              <option value="Points">Division</option>
            </select>
          </form>
        </div>
        <div className="row container" style={{ marginTop: 79 }}>
          <div className="col-12 text-center m-auto">
            <button
              type="button"
              className="btn-sm ml-5"
              style={{
                border: '1px solid yellow',
                borderRadius: 15,
                width: 112,
                height: 30,
                backgroundColor: '#ffd420',
                outline: 0,
              }}
              onClick={() => {
                setOpen(true);
                setTemplateOptionModal(false);
              }}
            >
              PREVIOUS
            </button>
            <button
              className="btn-sm pb-1 ml-1"
              style={{
                border: '1px solid yellow',
                borderRadius: 15,
                width: 112,
                height: 30,
                backgroundColor: '#ffd420',
                outline: 0,
              }}
              onClick={() => {
                console.log(templateOptionState);
                if (templateOptionState === 'points') {
                  setPointsFirstModal(true);
                }
                if (templateOptionState === 'pools') {
                  setPoolsFirstModal(true);
                }
              }}
            >
              NEXT
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        open={pointsFirstModal}
        onClose={() => setPointsFirstModal(false)}
        center
        styles={{
          modal: {
            borderRadius: 12,
            boxShadow: '0 1 2 0 rgba(0,0,0,0.2',
          },
        }}
      >
        <div
          className="text-center"
          style={{
            marginTop: 62,
            fontFamily: 'Futura',
            fontSize: 14,
            fontWeight: 'bold',
            fontStretch: 'normal',
            fontStyle: 'normal',
            letterSpacing: 'normal',
            color: '#4a4a4a',
          }}
        >
          1/2 Choose the options of points
        </div>
        <div
          className="text-center"
          style={{
            marginTop: 8,
            fontFamily: 'Futura',
            fontWeight: 'bold',
            fontStretch: 'normal',
            fontStyle: 'normal',
            letterSpacing: 'normal',
            color: '#9b9b9b',
          }}
        >
          <form>
            <select
              className="form-control"
              value={pointsFirstState}
              onChange={(e) => setPointsFirstState(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </form>
        </div>
        <div className="row container" style={{ marginTop: 79 }}>
          <div className="col-12 text-center m-auto">
            <button
              type="button"
              className="btn-sm ml-5"
              style={{
                border: '1px solid yellow',
                borderRadius: 15,
                width: 112,
                height: 30,
                backgroundColor: '#ffd420',
                outline: 0,
              }}
            >
              PREVIOUS
            </button>
            <button
              className="btn-sm pb-1 ml-1"
              style={{
                border: '1px solid yellow',
                borderRadius: 15,
                width: 112,
                height: 30,
                backgroundColor: '#ffd420',
                outline: 0,
              }}
              onClick={() => setPointsSecondModal(true)}
            >
              NEXT
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        open={pointsSecondModal}
        onClose={() => setPointsSecondModal(false)}
        center
        styles={{
          modal: {
            borderRadius: 12,
            boxShadow: '0 1 2 0 rgba(0,0,0,0.2',
          },
        }}
      >
        <div
          className="text-center"
          style={{
            marginTop: 62,
            fontFamily: 'Futura',
            fontSize: 14,
            fontWeight: 'bold',
            fontStretch: 'normal',
            fontStyle: 'normal',
            letterSpacing: 'normal',
            color: '#4a4a4a',
          }}
        >
          2/2 Choose the options of points
        </div>
        <div
          className="text-center"
          style={{
            marginTop: 8,
            fontFamily: 'Futura',
            fontWeight: 'bold',
            fontStretch: 'normal',
            fontStyle: 'normal',
            letterSpacing: 'normal',
            color: '#9b9b9b',
          }}
        >
          <form>
            <input
              type="text"
              className="form-control"
              value={pointsSecondState}
              onChange={(e) => setPointsSecondState(e.target.value)}
            />
          </form>
        </div>
        <div className="row container" style={{ marginTop: 79 }}>
          <div className="col-12 text-center m-auto">
            <button
              type="button"
              className="btn-sm ml-5"
              style={{
                border: '1px solid yellow',
                borderRadius: 15,
                width: 112,
                height: 30,
                backgroundColor: '#ffd420',
                outline: 0,
              }}
            >
              PREVIOUS
            </button>
            <button
              className="btn-sm pb-1 ml-1"
              style={{
                border: '1px solid yellow',
                borderRadius: 15,
                width: 112,
                height: 30,
                backgroundColor: '#ffd420',
                outline: 0,
              }}
              onClick={() => {
                console.log({
                  templateOptionState,
                  pointsFirstState,
                  pointsSecondState,
                });
                props.history.push('/templatePoints');
              }}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </Modal>

      {/* pools */}
      <Modal
        open={poolsFirstModal}
        onClose={() => setPoolsFirstModal(false)}
        center
        styles={{
          modal: {
            borderRadius: 12,
            boxShadow: '0 1 2 0 rgba(0,0,0,0.2',
          },
        }}
      >
        <div
          className="text-center"
          style={{
            marginTop: 62,
            fontFamily: 'Futura',
            fontSize: 14,
            fontWeight: 'bold',
            fontStretch: 'normal',
            fontStyle: 'normal',
            letterSpacing: 'normal',
            color: '#4a4a4a',
          }}
        >
          1/4 Choose the options of pools
        </div>
        <div
          className="text-center"
          style={{
            marginTop: 8,
            fontFamily: 'Futura',
            fontWeight: 'bold',
            fontStretch: 'normal',
            fontStyle: 'normal',
            letterSpacing: 'normal',
            color: '#9b9b9b',
          }}
        >
          <form>
            <select
              className="form-control"
              value={poolsFirstState}
              onChange={(e) => setPoolsFirstState(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </form>
        </div>
        <div className="row container" style={{ marginTop: 79 }}>
          <div className="col-12 text-center m-auto">
            <button
              type="button"
              className="btn-sm ml-5"
              style={{
                border: '1px solid yellow',
                borderRadius: 15,
                width: 112,
                height: 30,
                backgroundColor: '#ffd420',
                outline: 0,
              }}
            >
              PREVIOUS
            </button>
            <button
              className="btn-sm pb-1 ml-1"
              style={{
                border: '1px solid yellow',
                borderRadius: 15,
                width: 112,
                height: 30,
                backgroundColor: '#ffd420',
                outline: 0,
              }}
              onClick={() => setPoolsSecondModal(true)}
            >
              NEXT
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        open={poolsSecondModal}
        onClose={() => setPoolsSecondModal(false)}
        center
        styles={{
          modal: {
            borderRadius: 12,
            boxShadow: '0 1 2 0 rgba(0,0,0,0.2',
          },
        }}
      >
        <div
          className="text-center"
          style={{
            marginTop: 62,
            fontFamily: 'Futura',
            fontSize: 14,
            fontWeight: 'bold',
            fontStretch: 'normal',
            fontStyle: 'normal',
            letterSpacing: 'normal',
            color: '#4a4a4a',
          }}
        >
          2/4 Choose the options of pools 3
        </div>
        <div
          className="text-center"
          style={{
            marginTop: 8,
            fontFamily: 'Futura',
            fontWeight: 'bold',
            fontStretch: 'normal',
            fontStyle: 'normal',
            letterSpacing: 'normal',
            color: '#9b9b9b',
          }}
        >
          <form>
            <select
              className="form-control"
              value={poolsSecondState}
              onChange={(e) => setPoolsSecondState(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </form>
        </div>
        <div className="row container" style={{ marginTop: 79 }}>
          <div className="col-12 text-center m-auto">
            <button
              type="button"
              className="btn-sm ml-5"
              style={{
                border: '1px solid yellow',
                borderRadius: 15,
                width: 112,
                height: 30,
                backgroundColor: '#ffd420',
                outline: 0,
              }}
            >
              PREVIOUS
            </button>
            <button
              className="btn-sm pb-1 ml-1"
              style={{
                border: '1px solid yellow',
                borderRadius: 15,
                width: 112,
                height: 30,
                backgroundColor: '#ffd420',
                outline: 0,
              }}
              onClick={() => setPoolsThirdModal(true)}
            >
              NEXT
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        open={poolsThirdModal}
        onClose={() => setPoolsThirdModal(false)}
        center
        styles={{
          modal: {
            borderRadius: 12,
            boxShadow: '0 1 2 0 rgba(0,0,0,0.2',
          },
        }}
      >
        <div
          className="text-center"
          style={{
            marginTop: 62,
            fontFamily: 'Futura',
            fontSize: 14,
            fontWeight: 'bold',
            fontStretch: 'normal',
            fontStyle: 'normal',
            letterSpacing: 'normal',
            color: '#4a4a4a',
          }}
        >
          3/4 Choose the options of pools 4
        </div>
        <div
          className="text-center"
          style={{
            marginTop: 8,
            fontFamily: 'Futura',
            fontWeight: 'bold',
            fontStretch: 'normal',
            fontStyle: 'normal',
            letterSpacing: 'normal',
            color: '#9b9b9b',
          }}
        >
          <form>
            <select
              className="form-control"
              value={poolsThirdState}
              onChange={(e) => setPoolsThirdState(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </form>
        </div>
        <div className="row container" style={{ marginTop: 79 }}>
          <div className="col-12 text-center m-auto">
            <button
              type="button"
              className="btn-sm ml-5"
              style={{
                border: '1px solid yellow',
                borderRadius: 15,
                width: 112,
                height: 30,
                backgroundColor: '#ffd420',
                outline: 0,
              }}
            >
              PREVIOUS
            </button>
            <button
              className="btn-sm pb-1 ml-1"
              style={{
                border: '1px solid yellow',
                borderRadius: 15,
                width: 112,
                height: 30,
                backgroundColor: '#ffd420',
                outline: 0,
              }}
              onClick={() => setPoolsForthModal(true)}
            >
              NEXT
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        open={poolsForthModal}
        onClose={() => setPoolsForthModal(false)}
        center
        styles={{
          modal: {
            borderRadius: 12,
            boxShadow: '0 1 2 0 rgba(0,0,0,0.2',
          },
        }}
      >
        <div
          className="text-center"
          style={{
            marginTop: 62,
            fontFamily: 'Futura',
            fontSize: 14,
            fontWeight: 'bold',
            fontStretch: 'normal',
            fontStyle: 'normal',
            letterSpacing: 'normal',
            color: '#4a4a4a',
          }}
        >
          4/4 Choose the options of pools 3
        </div>
        <div
          className="text-center"
          style={{
            marginTop: 8,
            fontFamily: 'Futura',
            fontWeight: 'bold',
            fontStretch: 'normal',
            fontStyle: 'normal',
            letterSpacing: 'normal',
            color: '#9b9b9b',
          }}
        >
          <form>
            <input
              type="text"
              className="form-control"
              value={poolsForthState}
              onChange={(e) => setPoolsForthState(e.target.value)}
            />
          </form>
        </div>
        <div className="row container" style={{ marginTop: 79 }}>
          <div className="col-12 text-center m-auto">
            <button
              type="button"
              className="btn-sm ml-5"
              style={{
                border: '1px solid yellow',
                borderRadius: 15,
                width: 112,
                height: 30,
                backgroundColor: '#ffd420',
                outline: 0,
              }}
            >
              PREVIOUS
            </button>
            <button
              className="btn-sm pb-1 ml-1"
              style={{
                border: '1px solid yellow',
                borderRadius: 15,
                width: 112,
                height: 30,
                backgroundColor: '#ffd420',
                outline: 0,
              }}
              onClick={() => {
                console.log({
                  poolsFirstState,
                  poolsSecondState,
                  poolsThirdState,
                  poolsForthState,
                });
                props.history.push('/templatePools');
              }}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalExample;
