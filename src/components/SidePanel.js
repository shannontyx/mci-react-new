import React from 'react'
import { useHistory } from "react-router-dom";

const SidePanel = () => {
  const history = useHistory();

  const handlePatientPage = () => {
    history.push('/');
  }

  return (
    <div className='side-panel'>
      {/* SidePannel Immage Background*/}
      <img
        src='/external/rectangle272116-rpzk-200w.png'
        alt='Rectangle272116'
        className='desktop1-rectangle27'
      />

      <img
        src='/external/screenshot20240122014303removebgpreview565-llpg-200h.png'
        alt='Screenshot20240122014303removebgpreview565'
        className='desktop1-screenshot20240122014303removebgpreview5'
      />
      <div className='desktop1-group72'>
        <img src='/external/vector67-cb4.svg' alt='Vector67' className='desktop1-vector01'/>
        <span className='desktop1-text147'>
          <span>Dashboard</span>
        </span>
      </div>
      <div className='desktop1-group73'>
        <img src='/external/bipeople610-ix7p.svg' alt='bipeople610' className='desktop1-bipeople' onClick={handlePatientPage}
        style={{ width: '37px', height: '37px', transition: 'width 0.3s, height 0.3s', display: 'inline-block' }}
        onMouseOver={(event) => { event.target.style.width = '41px'; event.target.style.height = '41px'; }}
        onMouseOut={(event) => { event.target.style.width = '37px'; event.target.style.height = '37px'; }}
        />
        <span className='desktop1-text149'>
          <span>Patients</span>
        </span>
      </div>
      <div className='desktop1-group74'>
        <img src='/external/vector614-v15.svg' alt='Vector614' className='desktop1-vector02' />
        <span className='desktop1-text151'>
          <span>Account</span>
        </span>
      </div>
      <div className='desktop1-group75'>
        <img src='/external/vector617-n7b5.svg' alt='Vector617' className='desktop1-vector03' />
        <span className='desktop1-text153'>
          <span>Settings</span>
        </span>
      </div>
      <div className='desktop1-group76'>
        <img src='/external/vector620-45ew.svg' alt='Vector620' className='desktop1-vector04' />
        <span className='desktop1-text155'>
          <span>Schedule</span>
        </span>
      </div>
      <div className='desktop1-group77'>
        <span className='desktop1-text157'>
          <span>Back</span>
        </span>
        <img src='/external/vector624-d2bi.svg' alt='Vector624' className='desktop1-vector05' />
        <div className='desktop1-group7'>
          <span className='desktop1-text159'>
            <span>Help</span>
          </span>
        </div>
      </div>
      <img src='/external/vector627-d2kj.svg' alt='Vector627' className='desktop1-vector06' />
    </div>
  )
}

export default SidePanel
