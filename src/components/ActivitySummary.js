import React from 'react'

const ActivitySummary = ({ daysActive, avgUse }) => {
  return (
    <div>
      <span className='desktop1-text024'>
        <span>Activity Summary</span>
      </span>
      {/* -------------------------------------- Assets -------------------------------------- */}
      <img
        src='/external/rectangle592101-1heq.svg'
        alt='Rectangle592101'
        className='desktop1-rectangle59'
      />
      <img
        src='/external/rectangle602102-mlpd-200h.png'
        alt='Rectangle602102'
        className='desktop1-rectangle60'
      />
      <span className='desktop1-text135'>
        <span>Average hours insole is in use each day</span>
      </span>
      <span className='desktop1-text137'>
        <span>Average Daily Use</span>
      </span>
      <img
        src='/external/rectangle622107-twc-200h.png'
        alt='Rectangle622107'
        className='desktop1-rectangle62'
      />
      <span className='desktop1-text139'>
        <span>Monthly Usage</span>
      </span>
      <span className='desktop1-text141'>
        <span>Number of days insole was active</span>
      </span>
      <img
        src='/external/rectangle602102-mlpd-200h.png'
        alt='Rectangle602102'
        className='desktop1-rectangle60'
      />
      <span className='desktop1-text135'>
        <span>Average hours insole is in use each day</span>
      </span>
      <span className='desktop1-text137'>
        <span>Average Daily Use</span>
      </span>
      <img
        src='/external/rectangle622107-twc-200h.png'
        alt='Rectangle622107'
        className='desktop1-rectangle62'
      />
      <span className='desktop1-text139'>
        <span>Monthly Usage</span>
      </span>
      <span className='desktop1-text141'>
        <span>Number of days insole was active</span>
      </span>

      <img src='/external/vector649-8p7p.svg' alt='Vector649' className='desktop1-vector' />
      <div className='desktop1-group71'>
        <span className='desktop1-text143'>
          <span>Time spend per activity</span>
        </span>
        <span className='desktop1-text145'>
          <span>View Activity &gt;</span>
        </span>
      </div>
      <img
        src='/external/rectangle64218-1k5-200h.png'
        alt='Rectangle64218'
        className='desktop1-rectangle64'
      />
      <span className='desktop1-text026'>
        <span>Generate report</span>
      </span>
      <img src='/external/vector650-ulld.svg' alt='Vector650' className='desktop1-vector07' />
      <span className='desktop1-text161'>
        <span>{avgUse}</span>
      </span>
      <img src='/external/vector640-o3ag.svg' alt='Vector640' className='desktop1-vector08' />
      <span className='desktop1-text163'>
        <span>{daysActive}</span>
      </span>
      <img src='/external/vector8189-ho3d.svg' alt='Vector8189' className='desktop1-vector09' />
      <span className='desktop1-text165'>
        <span>
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
      </span>
    </div>
  )
}

export default ActivitySummary
