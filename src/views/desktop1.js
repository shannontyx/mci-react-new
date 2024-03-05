import React from 'react' 
import { useEffect } from 'react'; 
import MetricsChart from './MetricsChart'; 
import metricsData from '../mci006_data/mci006_metrics_data.json'; 
import {Chart, LinearScale, BarController, BarElement, Tooltip, Legend, TimeScale} from "chart.js";  
import { AdapterDateFns } from 'chartjs-adapter-date-fns'; 
import { Helmet } from 'react-helmet' 
import './desktop1.css' 
 
const Desktop1 = (props) => { 
 
  useEffect(() => { 
    Chart.register(LinearScale, BarController, BarElement, Tooltip, Legend, TimeScale); 
  }, []);
  
  return (
    <div className="desktop1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
        
      <div className="desktop1-desktop1">
        <img
          src="/external/rectangle592101-1heq.svg"
          alt="Rectangle592101"
          className="desktop1-rectangle59"
        />
        <span className="desktop1-text002">
          <span>Monthly usage</span>
        </span>
        <span className="desktop1-text004">
          <span>14/30</span>
        </span>
        <span className="desktop1-text008">
          <span>Monthly usage</span>
        </span>
        <span className="desktop1-text010">
          <span>14/30</span>
        </span>
        {/* <img
          src="/external/rectangle63210-r9.svg"
          alt="Rectangle63210"
          className="desktop1-rectangle63"
        /> */}
        <div className="desktop1-header"></div>
        <span className="desktop1-text012">
          <span>Patient Name</span>
        </span>
        <span className="desktop1-text014">
          <span>Patient ID</span>
        </span>
        <span className="desktop1-text016">
          <span>Adam Tan</span>
        </span>
        <span className="desktop1-text018">
          <span>0012345</span>
        </span>
        <span className="desktop1-text020">
          <span>
            Select Dates &gt;
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <span className="desktop1-text022">
          <span>01/01/2024 - 30/01/2024</span>
        </span>
        <span className="desktop1-text024">
          <span>Activity Summary</span>
        </span>
        <div>
        
        
        </div>
        <img
          src="/external/rectangle64218-1k5-200h.png"
          alt="Rectangle64218"
          className="desktop1-rectangle64"
        />
        <span className="desktop1-text026">
          <span>Generate report</span>
        </span>
        <span className="desktop1-text028">
          <span>Gait Time</span>
        </span>
        <img
          src="/external/rectangle65222-8o1j.svg"
          alt="Rectangle65222"
          className="desktop1-rectangle65"
        />
        <div className="desktop1-group56">
          <img
            src="/external/line9225-zsym.svg"
            alt="Line9225"
            className="desktop1-line9"
          />
          <img
            src="/external/line8226-kzek.svg"
            alt="Line8226"
            className="desktop1-line8"
          />
          <span className="desktop1-text030">
            <span>Heathy cohort median</span>
          </span>
          <span className="desktop1-text032">
            <span>Individual median</span>
          </span>
        </div>
        <span className="desktop1-text034">
          <span className="desktop1-text035">1.66</span>
          <span className="desktop1-text036">[s]</span>
        </span>
        <span className="desktop1-text037">
          <span>Median Gait Time</span>
          <br></br>
          <span>(monthly)</span>
        </span>
        <span className="desktop1-text041">
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="desktop1-text043">
            0.26 [s] higher than healthy cohort
          </span>
        </span>
        <span className="desktop1-text044">
          <span>
            <span> 0.12 [s] lower than previous period</span>
            <br></br>
            <span>(moving closer to healthy cohort)</span>
          </span>
        </span>
        <div className="desktop1-group57">
          <img
            src="/external/lucidearrowup234-cfm.svg"
            alt="lucidearrowup234"
            className="desktop1-lucidearrowup"
          />
        </div>
        <div className="desktop1-group58">
          <img
            src="/external/lucidearrowup237-p1pe.svg"
            alt="lucidearrowup237"
            className="desktop1-lucidearrowup1"
          />
        </div>
        <img
          src="/external/line11239-vk79.svg"
          alt="Line11239"
          className="desktop1-line11"
        />
        <span className="desktop1-text049">
          <span>Cadence</span>
        </span>
        <img
          src="/external/rectangle68241-acri.svg"
          alt="Rectangle68241"
          className="desktop1-rectangle68"
        />
        <div className="cadencegraph">
          <MetricsChart data={metricsData.cadence} metricName="Cadence" />
        </div>
        <img
          src="/external/rectangle71242-atv.svg"
          alt="Rectangle71242"
          className="desktop1-rectangle71"
        />
        <div className="copspeedgraph">
          <MetricsChart data={metricsData.median_cop_speed} metricName="Median COP Speed" />
        </div>
        {/* Add more charts for other metrics if needed */}
        <div className="desktop1-group59">
          <img
            src="/external/line9244-145u.svg"
            alt="Line9244"
            className="desktop1-line91"
          />
          <img
            src="/external/line8245-e3e.svg"
            alt="Line8245"
            className="desktop1-line81"
          />
          <span className="desktop1-text051">
            <span>Heathy cohort median</span>
          </span>
          <span className="desktop1-text053">
            <span>Individual median</span>
          </span>
        </div>
        <span className="desktop1-text055">
          <span className="desktop1-text056">76</span>
          <span className="desktop1-text057">[steps/min]</span>
        </span>
        <span className="desktop1-text058">
          <span>
            <span>Median Cadence</span>
            <br></br>
            <span>(monthly)</span>
          </span>
        </span>
        <span className="desktop1-text063">
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
        <span className="desktop1-text069">
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="desktop1-text071">
            11 steps lower than healthy cohort
          </span>
        </span>
        <span className="desktop1-text072">
          <span>
            <span> 2 steps lower than previous period</span>
            <br></br>
            <span>(moving further from healthy cohort)</span>
          </span>
        </span>
        <div className="desktop1-group60">
          <img
            src="/external/lucidearrowup253-dby.svg"
            alt="lucidearrowup253"
            className="desktop1-lucidearrowup2"
          />
        </div>
        <div className="desktop1-group61">
          <img
            src="/external/lucidearrowup256-insa.svg"
            alt="lucidearrowup256"
            className="desktop1-lucidearrowup3"
          />
        </div>
        <img
          src="/external/line15258-nkws.svg"
          alt="Line15258"
          className="desktop1-line15"
        />
        <span className="desktop1-text077">
          <span>COP Speed</span>
        </span>
        <div className="desktop1-group62">
          <img
            src="/external/line9261-t6kf.svg"
            alt="Line9261"
            className="desktop1-line92"
          />
          <img
            src="/external/line8262-f9y9.svg"
            alt="Line8262"
            className="desktop1-line82"
          />
          <span className="desktop1-text079">
            <span>Heathy cohort median</span>
          </span>
          <span className="desktop1-text081">
            <span>Individual median</span>
          </span>
        </div>
        <span className="desktop1-text083">
          <span className="desktop1-text084">1.21</span>
          <span className="desktop1-text085">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="desktop1-text086">[m/s]</span>
        </span>
        <span className="desktop1-text087">
          <span>Median COP Speed</span>
          <br></br>
          <span>(monthly)</span>
        </span>
        <span className="desktop1-text091">
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="desktop1-text093">
            0.10 [m/s] lower than healthy cohort
          </span>
          
        </span>
        <span className="desktop1-text094">
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="desktop1-text096">
            Remained constant from previous period
          </span>
        </span>
        <div className="desktop1-group63">
          <img
            src="/external/lucidearrowup270-lyop.svg"
            alt="lucidearrowup270"
            className="desktop1-lucidearrowup4"
          />
        </div>
        <img
          src="/external/ouitokenconstant272-rg6.svg"
          alt="ouitokenconstant272"
          className="desktop1-ouitokenconstant"
        />
        <img
          src="/external/line17274-bf9r.svg"
          alt="Line17274"
          className="desktop1-line17"
        />
        <img
          src="/external/rectangle70275-xsps.svg"
          alt="Rectangle70275"
          className="desktop1-rectangle70"
        />
        <div className="stepvariabilitygraph">
          <MetricsChart data={metricsData.step_variability} metricName="Step Variability" />
        </div>
        <span className="desktop1-text097">
          <span>Gait Variability</span>
        </span>
        <div className="desktop1-group64">
          <img
            src="/external/line9278-k0rf.svg"
            alt="Line9278"
            className="desktop1-line93"
          />
          <img
            src="/external/line8279-51ry.svg"
            alt="Line8279"
            className="desktop1-line83"
          />
          <span className="desktop1-text099">
            <span>Heathy cohort median</span>
          </span>
          <span className="desktop1-text101">
            <span>Individual median</span>
          </span>
        </div>
        <span className="desktop1-text103">
          <span className="desktop1-text104">1.32</span>
          <span className="desktop1-text105">[m/s]</span>
        </span>
        
        <span className="desktop1-text110">
          <span>Median Gait Variability</span>
          <br></br>
          <span>(monthly)</span>
        </span>
        <span className="desktop1-text114">
          <span className="desktop1-text115">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          
        </span>
        <span className="desktop1-text119">
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="desktop1-text121">
            0.30 [m/s] higher than healthy cohort
          </span>
        </span>
        <span className="desktop1-text122">
          <span>
            <span> 0.21 [m/s] higher than previous period</span>
            <br></br>
            <span>(moving further from healthy cohort)</span>
          </span>
        </span>
        <div className="desktop1-group26">
          <img
            src="/external/lucidearrowup287-frng.svg"
            alt="lucidearrowup287"
            className="desktop1-lucidearrowup5"
          />
        </div>
        <div className="desktop1-group27">
          <img
            src="/external/lucidearrowup290-wy8.svg"
            alt="lucidearrowup290"
            className="desktop1-lucidearrowup6"
          />
        </div>
        <img
          src="/external/line13292-a83q.svg"
          alt="Line13292"
          className="desktop1-line13"
        />
        <div className="desktop1-group40">
          <span className="desktop1-text127">
            <span>Subject X Daily Gait Variability</span>
          </span>
        </div>
        <span className="desktop1-text129">
          <span>Subject X Daily Cadence</span>
        </span>
        <span className="desktop1-text131">
          <span>Subject X Daily Median COP Speed</span>
        </span>
        <div className="desktop1-group"></div>
        <span className="desktop1-text133">
          <span>Subject X Gait Time Average Per Day</span>
        </span>
       
        <img
          src="/external/rectangle602102-mlpd-200h.png"
          alt="Rectangle602102"
          className="desktop1-rectangle60"
        />
        <span className="desktop1-text135">
          <span>Average hours insole is in use each day</span>
        </span>
        <span className="desktop1-text137">
          <span>Average Daily Use</span>
        </span>
        <img
          src="/external/rectangle622107-twc-200h.png"
          alt="Rectangle622107"
          className="desktop1-rectangle62"
        />
        <span className="desktop1-text139">
          <span>Monthly Usage</span>
        </span>
        <span className="desktop1-text141">
          <span>Number of days insole was active</span>
        </span>
        <img
          src="/external/rectangle272116-rpzk-200w.png"
          alt="Rectangle272116"
          className="desktop1-rectangle27"
        />
        <img
          src="/external/vector649-8p7p.svg"
          alt="Vector649"
          className="desktop1-vector"
        />
        <div className="desktop1-group71">
          <span className="desktop1-text143">
            <span>Time spend per activity</span>
          </span>
          <span className="desktop1-text145">
            <span>View Activity &gt;</span>
          </span>
        </div>
        <img
          src="/external/screenshot20240122014303removebgpreview565-llpg-200h.png"
          alt="Screenshot20240122014303removebgpreview565"
          className="desktop1-screenshot20240122014303removebgpreview5"
        />
        <div className="desktop1-group72">
          <img
            src="/external/vector67-cb4.svg"
            alt="Vector67"
            className="desktop1-vector01"
          />
          <span className="desktop1-text147">
            <span>Dashboard</span>
          </span>
        </div>
        <div className="desktop1-group73">
          <img
            src="/external/bipeople610-ix7p.svg"
            alt="bipeople610"
            className="desktop1-bipeople"
          />
          <span className="desktop1-text149">
            <span>Patients</span>
          </span>
        </div>
        <div className="desktop1-group74">
          <img
            src="/external/vector614-v15.svg"
            alt="Vector614"
            className="desktop1-vector02"
          />
          <span className="desktop1-text151">
            <span>Account</span>
          </span>
        </div>
        <div className="desktop1-group75">
          <img
            src="/external/vector617-n7b5.svg"
            alt="Vector617"
            className="desktop1-vector03"
          />
          <span className="desktop1-text153">
            <span>Settings</span>
          </span>
        </div>
        <div className="desktop1-group76">
          <img
            src="/external/vector620-45ew.svg"
            alt="Vector620"
            className="desktop1-vector04"
          />
          <span className="desktop1-text155">
            <span>Schedule</span>
          </span>
        </div>
        <div className="desktop1-group77">
          <span className="desktop1-text157">
            <span>Back</span>
          </span>
          <img
            src="/external/vector624-d2bi.svg"
            alt="Vector624"
            className="desktop1-vector05"
          />
          <div className="desktop1-group7">
            <span className="desktop1-text159">
              <span>Help</span>
            </span>
          </div>
        </div>
        <img
          src="/external/vector627-d2kj.svg"
          alt="Vector627"
          className="desktop1-vector06"
        />
        <img
          src="/external/vector650-ulld.svg"
          alt="Vector650"
          className="desktop1-vector07"
        />
        <span className="desktop1-text161">
          <span>6.5</span>
        </span>
        <img
          src="/external/vector640-o3ag.svg"
          alt="Vector640"
          className="desktop1-vector08"
        />
        <span className="desktop1-text163">
          <span>14/30</span>
        </span>
        <img
          src="/external/vector8189-ho3d.svg"
          alt="Vector8189"
          className="desktop1-vector09"
        />
        <span className="desktop1-text165">
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
         
        </span>
      </div>
    </div>
  )
}

export default Desktop1
