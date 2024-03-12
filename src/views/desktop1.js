import React from 'react'
import { SidePanel, MetricsChart, ActivitySummary, TopPanel } from '../components' // Import Components
import { Helmet } from 'react-helmet'
import './desktop1.css'
import * as utils from '../utils/helperFunctions'

const Desktop1 = props => {
  const { patientData } = props.location.state
  const metricsData = patientData.patientMetricsData

  const daysActive = utils.calculateDaysActive(metricsData.total_activity)
  const averagePerDay = utils.calculateAverageTime(metricsData.total_activity)
  const medianGaitTime = utils.calculateMedian(metricsData.stride_time)
  const medianVariability = utils.calculateMedian(metricsData.stride_variability)
  const medianCadence = utils.calculateMedian(metricsData.cadence)
  const medianSpeed = utils.calculateMedian(metricsData.median_cop_speed)

  return (
    <div className='desktop1-container'>
      <Helmet>
        <title>exported project</title>
      </Helmet>

      <div className='desktop1-desktop1'>
        {/* <img
          src="/external/rectangle63210-r9.svg"
          alt="Rectangle63210"
          className="desktop1-rectangle63"
        /> */}
        <TopPanel patientId={patientData.id} />
        <ActivitySummary daysActive={`${daysActive} days`} avgUse={`${averagePerDay} min`} />
        {/* --------------------------------- Gait Time --------------------------------- */}
        <span className='desktop1-text028'>
          <span>Gait Time</span>
        </span>
        <img
          src='/external/rectangle65222-8o1j.svg'
          alt='Rectangle65222'
          className='desktop1-rectangle65'
        />
        <div className='steptimegraph'>
          <MetricsChart
            data={metricsData.stride_time}
            metricName='Gait Time'
            yLabel='Gait Time [sec]'
          />
        </div>
        <div className='desktop1-group56'>
          <img src='/external/line9225-zsym.svg' alt='Line9225' className='desktop1-line9' />
          <img src='/external/line8226-kzek.svg' alt='Line8226' className='desktop1-line8' />
          <span className='desktop1-text030'>
            <span>Heathy cohort median</span>
          </span>
          <span className='desktop1-text032'>
            <span>Individual median</span>
          </span>
        </div>
        <span className='desktop1-text034'>
          <span className='desktop1-text035'>{medianGaitTime.toFixed(2)}</span>
          <span className='desktop1-text036'>[s]</span>
        </span>
        <span className='desktop1-text037'>
          <span>Median Gait Time</span>
          <br></br>
          <span>(time period)</span>
        </span>
        <span className='desktop1-text041'>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className='desktop1-text043'>0.26 [s] higher than healthy cohort</span>
        </span>
        <span className='desktop1-text044'>
          <span>
            {/*<br></br>
            <span>(moving closer to healthy cohort)</span>*/}
          </span>
        </span>
        <div className='desktop1-group57'>
          <img
            src='/external/lucidearrowup234-cfm.svg'
            alt='lucidearrowup234'
            className='desktop1-lucidearrowup'
          />
        </div>
        <div className='desktop1-group58'>
          <img
            src='/external/lucidearrowup237-p1pe.svg'
            alt='lucidearrowup237'
            className='desktop1-lucidearrowup1'
          />
        </div>
        {/* --------------------------------- End Gait Time --------------------------------- */}
        <img src='/external/line11239-vk79.svg' alt='Line11239' className='desktop1-line11' />
        <span className='desktop1-text049'>
          <span>Cadence</span>
        </span>
        <img
          src='/external/rectangle68241-acri.svg'
          alt='Rectangle68241'
          className='desktop1-rectangle68'
        />
        <div className='cadencegraph'>
          <MetricsChart data={metricsData.cadence} metricName='Cadence' yLabel='Steps / minute' />
        </div>
        <img
          src='/external/rectangle71242-atv.svg'
          alt='Rectangle71242'
          className='desktop1-rectangle71'
        />
        <div className='copspeedgraph'>
          <MetricsChart
            data={metricsData.median_cop_speed}
            metricName='Median COP Speed'
            yLabel='Speed [m/s]'
          />
        </div>
        {/* Add more charts for other metrics if needed */}
        <div className='desktop1-group59'>
          <img src='/external/line9244-145u.svg' alt='Line9244' className='desktop1-line91' />
          <img src='/external/line8245-e3e.svg' alt='Line8245' className='desktop1-line81' />
          <span className='desktop1-text051'>
            <span>Heathy cohort median</span>
          </span>
          <span className='desktop1-text053'>
            <span>Individual median</span>
          </span>
        </div>
        <span className='desktop1-text055'>
          <span className='desktop1-text056'>{medianCadence.toFixed(0)}</span>
          <span className='desktop1-text057'>[steps/min]</span>
        </span>
        <span className='desktop1-text058'>
          <span>
            <span>Median Cadence</span>
            <br></br>
            <span>(time period)</span>
          </span>
        </span>
        <span className='desktop1-text063'>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <span className='desktop1-text069'>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className='desktop1-text071'>11 steps lower than healthy cohort</span>
        </span>
        <span className='desktop1-text072'>
          <span>
            {/*<span> 2 steps lower than previous period</span>
            <br></br>
            <span>(moving further from healthy cohort)</span>*/}
          </span>
        </span>
        <div className='desktop1-group60'>
          <img
            src='/external/lucidearrowup253-dby.svg'
            alt='lucidearrowup253'
            className='desktop1-lucidearrowup2'
          />
        </div>
        <div className='desktop1-group61'>
          <img
            src='/external/lucidearrowup256-insa.svg'
            alt='lucidearrowup256'
            className='desktop1-lucidearrowup3'
          />
        </div>
        <img src='/external/line15258-nkws.svg' alt='Line15258' className='desktop1-line15' />
        <span className='desktop1-text077'>
          <span>COP Speed</span>
        </span>
        <div className='desktop1-group62'>
          <img src='/external/line9261-t6kf.svg' alt='Line9261' className='desktop1-line92' />
          <img src='/external/line8262-f9y9.svg' alt='Line8262' className='desktop1-line82' />
          <span className='desktop1-text079'>
            <span>Heathy cohort median</span>
          </span>
          <span className='desktop1-text081'>
            <span>Individual median</span>
          </span>
        </div>
        <span className='desktop1-text083'>
          <span className='desktop1-text084'>{medianSpeed.toFixed(2)}</span>
          <span className='desktop1-text085'>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className='desktop1-text086'>[m/s]</span>
        </span>
        <span className='desktop1-text087'>
          <span>Median COP Speed</span>
          <br></br>
          <span>(time period)</span>
        </span>
        <span className='desktop1-text091'>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          {/*
          <span className='desktop1-text093'>0.10 [m/s] lower than healthy cohort</span>
        </span>
        <span className='desktop1-text094'>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
            <span className='desktop1-text096'>Remained constant from previous period</span>*/}
        </span>
        <div className='desktop1-group63'>
          <img
            src='/external/lucidearrowup270-lyop.svg'
            alt='lucidearrowup270'
            className='desktop1-lucidearrowup4'
          />
        </div>
        <img
          src='/external/ouitokenconstant272-rg6.svg'
          alt='ouitokenconstant272'
          className='desktop1-ouitokenconstant'
        />
        <img src='/external/line17274-bf9r.svg' alt='Line17274' className='desktop1-line17' />
        <img
          src='/external/rectangle70275-xsps.svg'
          alt='Rectangle70275'
          className='desktop1-rectangle70'
        />
        <div className='stepvariabilitygraph'>
          <MetricsChart
            data={metricsData.step_variability}
            metricName='Variability'
            yLabel='Variability'
          />
        </div>
        <span className='desktop1-text097'>
          <span>Gait Variability</span>
        </span>
        <div className='desktop1-group64'>
          <img src='/external/line9278-k0rf.svg' alt='Line9278' className='desktop1-line93' />
          <img src='/external/line8279-51ry.svg' alt='Line8279' className='desktop1-line83' />
          <span className='desktop1-text099'>
            <span>Heathy cohort median</span>
          </span>
          <span className='desktop1-text101'>
            <span>Individual median</span>
          </span>
        </div>
        <span className='desktop1-text103'>
          <span className='desktop1-text104'>{medianVariability.toFixed(2)}</span>
          {/* <span className='desktop1-text105'>[m/s]</span> */}
        </span>

        <span className='desktop1-text110'>
          <span>Median Gait Variability</span>
          <br></br>
          <span>(time period)</span>
        </span>
        <span className='desktop1-text114'>
          <span className='desktop1-text115'>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <span className='desktop1-text119'>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className='desktop1-text121'>0.30 [m/s] higher than healthy cohort</span>
        </span>
        <span className='desktop1-text122'>
          <span>
            {/*<span> 0.21 [m/s] higher than previous period</span>
            <br></br>
            <span>(moving further from healthy cohort)</span>*/}
          </span>
        </span>
        <div className='desktop1-group26'>
          <img
            src='/external/lucidearrowup287-frng.svg'
            alt='lucidearrowup287'
            className='desktop1-lucidearrowup5'
          />
        </div>
        <div className='desktop1-group27'>
          <img
            src='/external/lucidearrowup290-wy8.svg'
            alt='lucidearrowup290'
            className='desktop1-lucidearrowup6'
          />
        </div>
        <img src='/external/line13292-a83q.svg' alt='Line13292' className='desktop1-line13' />
        <div className='desktop1-group40'>
          <span className='desktop1-text127'>
            <span>Subject X Daily Gait Variability</span>
          </span>
        </div>
        <span className='desktop1-text129'>
          <span>Subject X Daily Cadence</span>
        </span>
        <span className='desktop1-text131'>
          <span>Subject X Daily Median COP Speed</span>
        </span>
        <div className='desktop1-group'></div>
        <span className='desktop1-text133'>
          <span>Subject X Gait Time Average Per Day</span>
        </span>

        {/* ------------------------------------------------------------------------------------ */
        /*                                      SidePannel                                      */
        /* ------------------------------------------------------------------------------------ */}

        <SidePanel />
      </div>
    </div>
  )
}

export default Desktop1
