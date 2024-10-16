import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Py-LMDC",
    description:
      "A ML based Linux Malware Detection and Classification System built using Python. Accurate upto 97%",
    tools: ["Python"],
    role: "Developer",
    code: "github.com/godofgeeks23/python-LMDC",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "Twitter Data Miner",
    description:
      "A tool to scrape live Twitter data using Python and analyzing it using Elastic stack. Highly performant (capable of ingesting 3k documents/sec)",
    tools: ["Python,", "Elasticsearch,", "Kibana,", "Logstash"],
    role: "Developer",
    code: "github.com/godofgeeks23/twitter-data-miner",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "Azure SIEM",
    description: `Used custom PowerShell script to extract metadata from Windows Event Viewer to be forwarded to third party API in order to
derive geolocation data. Implemented Log Analytics Workspace in Azure to ingest custom logs containing geographic information (latitude, longitude,
state/province, and country) in bulk (1.5k entries/second). Configured Azure Sentinel (Microsoft’s cloud SIEM) workbook to display global attack data (RDP brute force) on World map according to physical location and magnitude of attacks. Observed thousands of attack attempts within 2 hours.`,
    tools: ["Powershell,", "Azure,", "Azure Sentinel"],
    code: "github.com/godofgeeks23/azureSIEM",
    role: "Cloud and Security Engineer",
    demo: "",
    image: realEstate,
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
