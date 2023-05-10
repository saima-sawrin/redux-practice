import { Box } from '@mui/material';
import { ResponsiveChoropleth } from '@nivo/geo';
import React from 'react';

const Geography = () => {
 const data = [
  {
    "id": "AFG",
    "value": 640098
  },
  {
    "id": "AGO",
    "value": 963545
  },
  {
    "id": "ALB",
    "value": 300240
  },
  {
    "id": "ARE",
    "value": 754944
  },
  {
    "id": "ARG",
    "value": 229477
  },
  {
    "id": "ARM",
    "value": 728153
  },
  {
    "id": "ATA",
    "value": 914316
  },
  {
    "id": "ATF",
    "value": 321566
  },
  {
    "id": "AUT",
    "value": 100751
  },
  {
    "id": "AZE",
    "value": 296725
  },
  {
    "id": "BDI",
    "value": 165711
  },
  {
    "id": "BEL",
    "value": 188254
  },
  {
    "id": "BEN",
    "value": 455486
  },
  {
    "id": "BFA",
    "value": 931890
  },
  {
    "id": "BGD",
    "value": 822867
  },
  {
    "id": "BGR",
    "value": 132405
  },
  {
    "id": "BHS",
    "value": 873727
  },
  {
    "id": "BIH",
    "value": 808302
  },
  {
    "id": "BLR",
    "value": 905960
  },
  {
    "id": "BLZ",
    "value": 154915
  },
  {
    "id": "BOL",
    "value": 349241
  },
  {
    "id": "BRN",
    "value": 240112
  },
  {
    "id": "BTN",
    "value": 257678
  },
  {
    "id": "BWA",
    "value": 565644
  },
  {
    "id": "CAF",
    "value": 996652
  },
  {
    "id": "CAN",
    "value": 577413
  },
  {
    "id": "CHE",
    "value": 526726
  },
  {
    "id": "CHL",
    "value": 242760
  },
  {
    "id": "CHN",
    "value": 532863
  },
  {
    "id": "CIV",
    "value": 266554
  },
  {
    "id": "CMR",
    "value": 18218
  },
  {
    "id": "COG",
    "value": 54722
  },
  {
    "id": "COL",
    "value": 597077
  },
  {
    "id": "CRI",
    "value": 923622
  },
  {
    "id": "CUB",
    "value": 161678
  },
  {
    "id": "-99",
    "value": 503012
  },
  {
    "id": "CYP",
    "value": 157942
  },
  {
    "id": "CZE",
    "value": 786779
  },
  {
    "id": "DEU",
    "value": 353989
  },
  {
    "id": "DJI",
    "value": 800805
  },
  {
    "id": "DNK",
    "value": 217046
  },
  {
    "id": "DOM",
    "value": 884573
  },
  {
    "id": "DZA",
    "value": 168182
  },
  {
    "id": "ECU",
    "value": 857057
  },
  {
    "id": "EGY",
    "value": 797964
  },
  {
    "id": "ERI",
    "value": 785111
  },
  {
    "id": "ESP",
    "value": 279360
  },
  {
    "id": "EST",
    "value": 908271
  },
  {
    "id": "ETH",
    "value": 953947
  },
  {
    "id": "FIN",
    "value": 363092
  },
  {
    "id": "FJI",
    "value": 457034
  },
  {
    "id": "FLK",
    "value": 238115
  },
  {
    "id": "FRA",
    "value": 600362
  },
  {
    "id": "GAB",
    "value": 485569
  },
  {
    "id": "GBR",
    "value": 985299
  },
  {
    "id": "GEO",
    "value": 145299
  },
  {
    "id": "GHA",
    "value": 201648
  },
  {
    "id": "GIN",
    "value": 129898
  },
  {
    "id": "GMB",
    "value": 968353
  },
  {
    "id": "GNB",
    "value": 428491
  },
  {
    "id": "GNQ",
    "value": 977428
  },
  {
    "id": "GRC",
    "value": 485893
  },
  {
    "id": "GTM",
    "value": 215862
  },
  {
    "id": "GUY",
    "value": 736548
  },
  {
    "id": "HND",
    "value": 638604
  },
  {
    "id": "HRV",
    "value": 188671
  },
  {
    "id": "HTI",
    "value": 942380
  },
  {
    "id": "HUN",
    "value": 378292
  },
  {
    "id": "IDN",
    "value": 999245
  },
  {
    "id": "IND",
    "value": 722195
  },
  {
    "id": "IRL",
    "value": 354817
  },
  {
    "id": "IRN",
    "value": 364396
  },
  {
    "id": "IRQ",
    "value": 482930
  },
  {
    "id": "ISL",
    "value": 774622
  },
  {
    "id": "ISR",
    "value": 142805
  },
  {
    "id": "ITA",
    "value": 412723
  },
  {
    "id": "JAM",
    "value": 663016
  },
  {
    "id": "JOR",
    "value": 459251
  },
  {
    "id": "JPN",
    "value": 790758
  },
  {
    "id": "KAZ",
    "value": 567640
  },
  {
    "id": "KEN",
    "value": 614598
  },
  {
    "id": "KGZ",
    "value": 331648
  },
  {
    "id": "KHM",
    "value": 572467
  },
  {
    "id": "OSA",
    "value": 622148
  },
  {
    "id": "KWT",
    "value": 658587
  },
  {
    "id": "LAO",
    "value": 813948
  },
  {
    "id": "LBN",
    "value": 358858
  },
  {
    "id": "LBR",
    "value": 1106
  },
  {
    "id": "LBY",
    "value": 705942
  },
  {
    "id": "LKA",
    "value": 849139
  },
  {
    "id": "LSO",
    "value": 697130
  },
  {
    "id": "LTU",
    "value": 119487
  },
  {
    "id": "LUX",
    "value": 586724
  },
  {
    "id": "LVA",
    "value": 218127
  },
  {
    "id": "MAR",
    "value": 832188
  },
  {
    "id": "MDA",
    "value": 818559
  },
  {
    "id": "MDG",
    "value": 824649
  },
  {
    "id": "MEX",
    "value": 141020
  },
  {
    "id": "MKD",
    "value": 682242
  },
  {
    "id": "MLI",
    "value": 276685
  },
  {
    "id": "MMR",
    "value": 550797
  },
  {
    "id": "MNE",
    "value": 327388
  },
  {
    "id": "MNG",
    "value": 818604
  },
  {
    "id": "MOZ",
    "value": 20946
  },
  {
    "id": "MRT",
    "value": 600719
  },
  {
    "id": "MWI",
    "value": 58217
  },
  {
    "id": "MYS",
    "value": 993637
  },
  {
    "id": "NAM",
    "value": 954945
  },
  {
    "id": "NCL",
    "value": 911021
  },
  {
    "id": "NER",
    "value": 485847
  },
  {
    "id": "NGA",
    "value": 84759
  },
  {
    "id": "NIC",
    "value": 537531
  },
  {
    "id": "NLD",
    "value": 509088
  },
  {
    "id": "NOR",
    "value": 720469
  },
  {
    "id": "NPL",
    "value": 709831
  },
  {
    "id": "NZL",
    "value": 503913
  },
  {
    "id": "OMN",
    "value": 701585
  },
  {
    "id": "PAK",
    "value": 529020
  },
  {
    "id": "PAN",
    "value": 406813
  },
  {
    "id": "PER",
    "value": 559
  },
  {
    "id": "PHL",
    "value": 959976
  },
  {
    "id": "PNG",
    "value": 638255
  },
  {
    "id": "POL",
    "value": 294305
  },
  {
    "id": "PRI",
    "value": 499855
  },
  {
    "id": "PRT",
    "value": 578407
  },
  {
    "id": "PRY",
    "value": 679027
  },
  {
    "id": "QAT",
    "value": 520477
  },
  {
    "id": "ROU",
    "value": 661993
  },
  {
    "id": "RUS",
    "value": 898228
  },
  {
    "id": "RWA",
    "value": 910567
  },
  {
    "id": "ESH",
    "value": 174552
  },
  {
    "id": "SAU",
    "value": 938947
  },
  {
    "id": "SDN",
    "value": 543124
  },
  {
    "id": "SDS",
    "value": 869707
  },
  {
    "id": "SEN",
    "value": 527361
  },
  {
    "id": "SLB",
    "value": 76124
  },
  {
    "id": "SLE",
    "value": 197952
  },
  {
    "id": "SLV",
    "value": 594378
  },
  {
    "id": "ABV",
    "value": 904592
  },
  {
    "id": "SOM",
    "value": 706763
  },
  {
    "id": "SRB",
    "value": 179845
  },
  {
    "id": "SUR",
    "value": 245256
  },
  {
    "id": "SVK",
    "value": 764491
  },
  {
    "id": "SVN",
    "value": 514426
  },
  {
    "id": "SWZ",
    "value": 116967
  },
  {
    "id": "SYR",
    "value": 754051
  },
  {
    "id": "TCD",
    "value": 861950
  },
  {
    "id": "TGO",
    "value": 300866
  },
  {
    "id": "THA",
    "value": 830335
  },
  {
    "id": "TJK",
    "value": 509291
  },
  {
    "id": "TKM",
    "value": 750222
  },
  {
    "id": "TLS",
    "value": 176799
  },
  {
    "id": "TTO",
    "value": 938766
  },
  {
    "id": "TUN",
    "value": 785651
  },
  {
    "id": "TUR",
    "value": 325186
  },
  {
    "id": "TWN",
    "value": 310367
  },
  {
    "id": "TZA",
    "value": 526103
  },
  {
    "id": "UGA",
    "value": 70446
  },
  {
    "id": "UKR",
    "value": 319160
  },
  {
    "id": "URY",
    "value": 429954
  },
  {
    "id": "USA",
    "value": 380844
  },
  {
    "id": "UZB",
    "value": 209423
  },
  {
    "id": "VEN",
    "value": 113467
  },
  {
    "id": "VNM",
    "value": 974638
  },
  {
    "id": "VUT",
    "value": 771962
  },
  {
    "id": "PSE",
    "value": 195278
  },
  {
    "id": "YEM",
    "value": 116350
  },
  {
    "id": "ZAF",
    "value": 198101
  },
  {
    "id": "ZMB",
    "value": 805434
  },
  {
    "id": "ZWE",
    "value": 979611
  },
  {
    "id": "KOR",
    "value": 846982
  }
]
    return (
      <Box m="1.5rem 2.5rem">
      
      <Box
        mt="40px"
        height="75vh"
        // border={`1px solid ${theme.palette.secondary[200]}`}
        borderRadius="4px"
      >
        {data ? (
          <ResponsiveChoropleth
            data={data}
            theme={{
              axis: {
                domain: {
                  line: {
                    // stroke: theme.palette.secondary[200],
                  },
                },
                legend: {
                  text: {
                    // fill: theme.palette.secondary[200],
                  },
                },
                ticks: {
                  line: {
                    // stroke: theme.palette.secondary[200],
                    strokeWidth: 1,
                  },
                  text: {
                    // fill: theme.palette.secondary[200],
                  },
                },
              },
              legends: {
                text: {
                  // fill: theme.palette.secondary[200],
                },
              },
              tooltip: {
                container: {
                  // color: theme.palette.primary.main,
                },
              },
            }}
            features={data}
            margin={{ top: 0, right: 0, bottom: 0, left: -50 }}
            domain={[0, 60]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            projectionScale={150}
            projectionTranslation={[0.45, 0.6]}
            projectionRotation={[0, 0, 0]}
            borderWidth={1.3}
            borderColor="#ffffff"
            legends={[
              {
                anchor: "bottom-right",
                direction: "column",
                justify: true,
                translateX: 0,
                translateY: -125,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                // itemTextColor: theme.palette.secondary[200],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      // itemTextColor: theme.palette.background.alt,
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        ) : (
          <>Loading...</>
        )}
      </Box>
    </Box>
  );
};
export default Geography;