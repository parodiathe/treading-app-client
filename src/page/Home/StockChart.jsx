import ReactApexChart from "react-apexcharts";
import React, {useState} from 'react';
import {Button} from "@/components/ui/button.jsx";

const timeSeries = [
    {
        keyword: "DIGITAL_CURRENCY_DAILY",
        key: "Time Series (Daily)",
        lable: "1 Day",
        value: 1,
    },
    {
        keyword: "DIGITAL_CURRENCY_WEEKLY",
        key: "Weekly Time Series",
        lable: "1 Week",
        value:7,
    },
    {
        keyword: "DIGITAL_CURRENCY_MONTHLY",
        key: "Monthly Time Series",
        lable: "1 Month",
        value:30,
    }
]

const StockChart = () => {

    const [activeLable, setActiveLable] = useState("1 Day");

    const searies = [
        {
            data: [
                [1720962181943, 59612.65548216775],
                [1720965817096, 59711.46094543786],
                [1720969433476, 60065.86230213515],
                [1720972907238, 60161.01663767256],
                [1720976551147, 60105.30674070386],
                [1720980584279, 60059.69256017659],
                [1720983687049, 60050.742527089096],
                [1720987686795, 59931.33689327525],
                [1720991205508, 60067.87504727605],
                [1720994962032, 61154.25049027309],
                [1720998624402, 60853.24309488443],
                [1721002161002, 60881.48885782499],
                [1721005656227, 61229.480385878865],
                [1721009000503, 61426.756346514296],
                [1721012533357, 62576.12941558953],
                [1721016205138, 62652.102418708375],
                [1721020189582, 62601.21539596413],
                [1721023887097, 62758.97597203408],
                [1721027136325, 62949.67638884755],
                [1721030598690, 62890.40632199661],
                [1721034414460, 62780.86549256509],
                [1721038109337, 62751.71811398488],
                [1721041884499, 62580.176000609245],
                [1721045046838, 62468.314406226025],
                [1721048810037, 62732.57146771641],
                [1721052715503, 62865.69466528791],
                [1721056085395, 63270.41832525062],
                [1721059380311, 63072.320176727175],
                [1721063251234, 63281.61714686876],
                [1721066627821, 63128.74570297137],
                [1721070308379, 63556.877053620046],
                [1721073827154, 63425.52176425553],
                [1721077714458, 63765.75236709564],
                [1721081480785, 63705.15201182238],
                [1721084808732, 64315.59239185009],
                [1721088599658, 64894.80923587094],
                [1721091854722, 64636.81716840933],
                [1721095916362, 64781.59633903313],
                [1721099120442, 64885.241268445745],
                [1721102709705, 64774.95557913305],
                [1721106009470, 64516.59579834891],
                [1721109980553, 63630.04229989184],
            ],
        }
    ]

    const options = {
        chart:{
            id:"area-datetime",
            type:"area",
            height:350,
            zoom:{
                autoScaleYaxis:true
            }
        },
        dataLabels:{
            enabled:false
        },
        xaxis:{
            type:"datetime",
            tickAmount:6
        },
        colors:["#758AA2"],
        markers: {
            colors:["#fff"],
            strokeColor:"#fff",
            size:0,
            strokeWidth:1,
            style:"hollow"
        },
        tooltip:{
            theme:"dark"
        },
        fill:{
            type:"gradient",
            gradient:{
                shadeIntensity:1,
                opacityFrom:0.7,
                opacityTo:0.9,
                stops:[0,100]
            }
        },
        grid:{
            borderColor:"#47535E",
            strokeDashArray:4,
            show:true
        }
    }

    const handleActiveLable=(value)=>{
        setActiveLable(value);
    }

    return (
        <div>
            <div className="space-x-3">
                {timeSeries.map((item) =><Button
                    variant={activeLable===item.lable?"":"outline"}
                    onClick={()=>handleActiveLable(item.lable)} key={item.lable}>
                    {item.lable}
                </Button>)}
            </div>
        <div id={"chart-timelines"}>
            <ReactApexChart
                options={options}
                series={searies}
                height={450}
                type="area"
            />
        </div>
    </div>
    );
};

export default StockChart;