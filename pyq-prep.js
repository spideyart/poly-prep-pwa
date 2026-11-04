// pyq-prep.js — Repeated questions with answers for 5th Sem (CME) exam prep.
// Source: Board Diploma papers Dec 2022 – Mar/Apr 2026. n = number of exam
// sessions the question appeared in; y = those sessions.
window.pyqPrep = [
{s:'INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP', c:'CM-501', t:'essay', n:3, y:'May/June 2023, Nov 2023, Mar/Apr 2026',
q:`A project has activities with their expected times given (example: 1-2: 12 days, 1-3: 16 days, 2-4: 14 days, 3-4: 6 days, 3-5: 7 days, 4-6: 10 days, 5-6: 14 days, 5-7: 10 days, 6-7: 12 days). Draw the project network, identify the critical path and find the project duration.`,
a:`Method (works for every year's numbers): 1) Draw the network — circles are events (nodes), arrows are activities with their durations. 2) Forward pass — Earliest Start Time (EST) of each event = longest path from the start. 3) Backward pass — Latest Finish Time (LFT) from the end backwards. 4) Total float = LFT - EST - duration; activities with zero float are critical. 5) The critical path is the longest path from start to finish; its length is the project duration.

Worked example with the numbers above:
Paths from event 1 to event 7:
1-2-4-6-7 = 12 + 14 + 10 + 12 = 48 days
1-3-4-6-7 = 16 + 6 + 10 + 12 = 44 days
1-3-5-6-7 = 16 + 7 + 14 + 12 = 49 days
1-3-5-7 = 16 + 7 + 10 = 33 days

Critical path = 1-3-5-6-7 and project duration = 49 days. Any delay on this path delays the whole project.`},
{s:'INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP', c:'CM-501', t:'essay', n:3, y:'Mar/Apr 2024, May/June 2023, Nov 2023',
q:`Explain the principles of management.`,
a:`Henri Fayol's 14 principles of management: 1) Division of work — work is divided so each person specialises. 2) Authority and responsibility — authority must match responsibility. 3) Discipline — respect for rules and agreements. 4) Unity of command — each worker takes orders from only one boss. 5) Unity of direction — one plan and one head for activities with the same objective. 6) Subordination of individual interest — the organisation's interest comes before personal interest. 7) Remuneration — fair pay for work done. 8) Centralisation — the balance between central and local decision-making. 9) Scalar chain — the chain of authority from top to bottom. 10) Order — a place for everything and everything in its place. 11) Equity — fairness and justice to all employees. 12) Stability of tenure — low employee turnover, job security. 13) Initiative — freedom to think and act. 14) Esprit de corps — team spirit and unity among staff.`},
{s:'INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP', c:'CM-501', t:'essay', n:2, y:'May/June 2023, Nov 2023',
q:`Explain line and staff organisation with a neat sketch.`,
a:`Line organisation is the direct chain of command: orders flow from top management down through managers to workers, and each person has one boss. Staff organisation adds specialists who only advise — they have no power to give orders.

Sketch (line = solid authority, staff = advisory):
Managing Director
├── Production Manager → Supervisors → Workers
├── Marketing Manager → Sales Staff
└── Staff officers (advisory only): HR, Finance, Legal

Advantages: clear authority and responsibility, plus expert advice from staff specialists. Disadvantages: possible conflict between line managers and staff advisors, and confusion when staff advice is treated as an order.`},
{s:'INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP', c:'CM-501', t:'essay', n:2, y:'Mar/Apr 2024, Nov 2024',
q:`Explain EOQ analysis with the help of a diagram.`,
a:`EOQ (Economic Order Quantity) is the order size that minimises total inventory cost. Total cost = ordering cost + carrying (holding) cost. Ordering cost falls as order size grows (fewer orders), while carrying cost rises (more stock held). EOQ is the point where the two are equal.

Formula: EOQ = square root of (2 × D × S / H), where D = annual demand, S = ordering cost per order, H = holding cost per unit per year.

Assumptions: demand is constant and known, lead time is fixed, no stock-outs, and stock is replenished instantly.

Diagram: the stock level falls in a sawtooth pattern as items are used and jumps back up on each delivery. On a cost graph, the ordering-cost curve slopes down, the carrying-cost curve slopes up, and they cross at the EOQ — the lowest point of the total-cost curve.`},
{s:'INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP', c:'CM-501', t:'essay', n:2, y:'Nov 2023, Oct/Nov 2025',
q:`State and explain the functions of management.`,
a:`1) Planning — deciding objectives and the actions needed to reach them; it is the first and primary function. 2) Organising — arranging people, work and resources into a structure (departments, roles, authority). 3) Staffing — recruiting, selecting, training and developing the right people for the right jobs. 4) Directing — guiding, leading, motivating and communicating with employees so plans are carried out. 5) Controlling — measuring actual performance against standards and correcting deviations. Coordination runs through all five — it keeps every department and activity working towards the same goal.`},
{s:'INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP', c:'CM-501', t:'essay', n:2, y:'Mar/Apr 2024, May/June 2023',
q:`Write short notes on: (i) Managerial skills (ii) Levels of management.`,
a:`(i) Managerial skills (Robert Katz): Technical skills — knowledge of methods, tools and techniques, most needed at lower levels. Human skills — ability to work with and motivate people, needed at all levels. Conceptual skills — seeing the organisation as a whole and thinking ahead, most needed at top level.

(ii) Levels of management: Top level (managing director, board) — sets objectives and policies. Middle level (departmental managers) — implements top-level plans and coordinates departments. Lower level (supervisors, foremen) — directly supervises workers and day-to-day operations.`},
{s:'INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP', c:'CM-501', t:'short', n:2, y:'Mar/Apr 2024, Oct/Nov 2025',
q:`What is production planning and control?`,
a:`Production planning and control (PPC) is the planning of what to produce, when to produce it and how to produce it, plus controlling production so the plan is actually followed. Its four functions are: routing (deciding the path of work), scheduling (fixing timings), dispatching (issuing orders to start work) and follow-up or expediting (checking progress and correcting delays).`},
{s:'INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP', c:'CM-501', t:'short', n:2, y:'Mar/Apr 2024, Nov 2024',
q:`Define quality system and quality control.`,
a:`Quality system: the organisational structure, procedures, processes and resources needed to implement quality management in an organisation. Quality control: the operational techniques and activities (inspection, testing, measurement) used to fulfil the requirements for quality — it checks whether the product actually meets the standard.`},
{s:'INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP', c:'CM-501', t:'short', n:2, y:'Mar/Apr 2024, Mar/Apr 2026',
q:`Define routing and scheduling.`,
a:`Routing is deciding the path and sequence of operations a job must pass through — which machines and departments it visits, and in what order. Scheduling is fixing the start and finish time for each operation, so that every job is completed by its due date and machines are used efficiently.`},
{s:'INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP', c:'CM-501', t:'short', n:2, y:'Mar/Apr 2024, May/June 2023',
q:`What is TQM?`,
a:`Total Quality Management (TQM) is a management approach in which quality is the responsibility of every member of the organisation, aimed at long-term success through customer satisfaction. Its principles are: customer focus, participation of all employees, process-based working, and continuous improvement (Kaizen) — small improvements made all the time, not only when problems appear.`},
{s:'INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP', c:'CM-501', t:'short', n:2, y:'May/June 2023, Nov 2024',
q:`What are the types of production?`,
a:`Job production — one-off, custom-made products (example: a bridge). Batch production — limited quantities of identical items made in lots (example: bakery batches). Mass production — continuous, large-volume production of standardised products (example: car assembly lines). Broadly these fall into intermittent production (job and batch) and continuous production (mass and process).`},
{s:'INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP', c:'CM-501', t:'short', n:2, y:'May/June 2023, Nov 2024',
q:`Explain Maslow's hierarchy of needs.`,
a:`Maslow arranged human needs in five levels, from bottom to top: 1) Physiological — food, water, shelter. 2) Safety — security, job safety. 3) Social — belongingness, friendship. 4) Esteem — respect, recognition. 5) Self-actualisation — reaching one's full potential. A lower need must be reasonably satisfied before the next higher need motivates a person.`},
{s:'INDUSTRIAL MANAGEMENT AND ENTREPRENEURSHIP', c:'CM-501', t:'short', n:2, y:'May/June 2023, Nov 2024',
q:`What is the PDCA cycle?`,
a:`PDCA (Plan-Do-Check-Act), also called the Deming cycle, is a four-step method for continuous improvement. Plan: identify a problem and plan a change. Do: implement the change on a small scale. Check: measure the results against the expected outcome. Act: standardise the change if it worked, or revise the plan and repeat the cycle.`},
{s:'INTERNET OF THINGS', c:'CM-504', t:'essay', n:5, y:'Dec 2022, Mar/Apr 2024, Mar/Apr 2026, Nov 2023, Nov 2024',
q:`Explain the topologies of ZIGBEE.`,
a:`Zigbee is a low-power, low-data-rate wireless standard (based on IEEE 802.15.4) for sensor networks. Its three topologies are:

1) Star topology — one coordinator sits at the centre and all end devices connect directly to it. It is simple and cheap, but the coordinator is a single point of failure and the range is limited.

2) Tree (cluster-tree) topology — routers form a hierarchy below the coordinator, extending the network's range in branches. Messages travel up and down the tree, but a failed router cuts off its whole branch.

3) Mesh topology — every full-function device can route messages for others, so data finds alternate paths if a link fails. It is self-healing, the most reliable and scalable, and is the topology used in large IoT deployments.`},
{s:'INTERNET OF THINGS', c:'CM-504', t:'essay', n:4, y:'Dec 2022, Mar/Apr 2024, Mar/Apr 2026, Oct/Nov 2025',
q:`Explain Bluetooth technology.`,
a:`Bluetooth is a short-range wireless technology for personal area networks (WPAN), standardised as IEEE 802.15.1. It works in the 2.4 GHz ISM band, typically over 10 metres (up to 100 metres for higher-power classes), and is designed for low power and low cost.

Network structure: devices form a piconet — one master device with up to 7 active slave devices. Several piconets can link together into a scatternet. Classic Bluetooth suits continuous data (audio), while Bluetooth Low Energy (BLE) suits battery-powered IoT sensors that send small amounts of data occasionally. Typical uses: headsets, wearables, health sensors, and smart-home devices.`},
{s:'INTERNET OF THINGS', c:'CM-504', t:'essay', n:3, y:'Mar/Apr 2024, May/June 2023, Nov 2024',
q:`Explain the connectivity technologies used in IoT.`,
a:`IoT devices connect in different ways, chosen by range, power, data rate and cost.

Short-range: Wi-Fi — high speed but high power (homes, offices). Bluetooth/BLE — short range, low power (wearables, sensors). Zigbee — low power mesh networks (smart homes, agriculture). NFC and RFID — centimetre-range identification and payments.

Long-range: LoRa/LoRaWAN — kilometres of range at very low power for small sensor data. Sigfox — ultra-narrowband, very low data rate. NB-IoT and cellular 4G/5G — use mobile networks for city-wide and high-speed IoT.

Rule of thumb: short-range for in-home and on-body networks, long-range low-power (LPWAN) for city and farm sensors, and cellular where high speed or full coverage is needed.`},
{s:'INTERNET OF THINGS', c:'CM-504', t:'essay', n:3, y:'Dec 2022, Mar/Apr 2024, Nov 2024',
q:`Explain the components of cloud computing.`,
a:`Cloud computing architecture has a front end (the user's side — browser, device, application) and a back end (the provider's side — servers, storage, networks).

Its components are: 1) Client infrastructure — the device and interface used to access the cloud. 2) Application — the software delivered to the user. 3) Service — the type of service offered (IaaS, PaaS, SaaS). 4) Runtime cloud — the execution environment (operating system, virtual machines). 5) Storage — data storage and backup. 6) Infrastructure — the hardware: servers, network and storage devices. 7) Management — tools that monitor and control the cloud. 8) Security — protection of data, users and access across all layers.`},
{s:'INTERNET OF THINGS', c:'CM-504', t:'essay', n:3, y:'Mar/Apr 2024, May/June 2023, Nov 2024',
q:`Explain the security concepts in cloud computing.`,
a:`Cloud security protects the CIA triad: Confidentiality (data seen only by authorised users), Integrity (data not changed by unauthorised parties) and Availability (services reachable when needed).

Main threats: data breaches, insecure interfaces and APIs, account hijacking, malicious insiders, and data loss from failures.

Key measures: encryption of data in transit and at rest, strong identity and access management with multi-factor authentication, firewalls and intrusion detection, regular audits and compliance with standards, and automatic backups for recovery. In the shared-responsibility model, the provider secures the cloud itself while the user secures what they put in the cloud.`},
{s:'INTERNET OF THINGS', c:'CM-504', t:'essay', n:3, y:'May/June 2023, Nov 2023, Nov 2024',
q:`Explain WMSN.`,
a:`WMSN (Wireless Multimedia Sensor Networks) are sensor networks whose nodes carry cameras and microphones, so they capture audio, video and still images — not just temperature or humidity readings.

Architecture: multimedia sensor nodes sense and compress media, forward it through multi-hop routes to a sink, which passes it to the base station for storage or action.

Challenges: multimedia needs much higher bandwidth and processing than scalar data, strict quality-of-service (delay and jitter matter for video), tight energy limits, and synchronisation between audio and video streams.

Applications: video surveillance, traffic monitoring, telemedicine (remote patient video), industrial inspection, and environmental observation.`},
{s:'INTERNET OF THINGS', c:'CM-504', t:'essay', n:5, y:'Dec 2022, Mar/Apr 2024, Mar/Apr 2026, Nov 2024, Oct/Nov 2025',
q:`Explain CoAP (Constrained Application Protocol) and its message types.`,
a:`CoAP is a lightweight web-transfer protocol for constrained IoT devices — small sensors with little memory, processing power and battery. It is RESTful like HTTP (methods GET, POST, PUT, DELETE and response codes such as 2.05 Content), but it runs over UDP instead of TCP and uses only a 4-byte fixed header, so it is far lighter.

Its four message types are: 1) Confirmable (CON) — the receiver must reply with an acknowledgement; used when delivery must be confirmed. 2) Non-confirmable (NON) — no acknowledgement is expected; used for frequent sensor readings where losing one message is acceptable. 3) Acknowledgement (ACK) — confirms receipt of a CON message and can carry the response. 4) Reset (RST) — signals an error, for example when a message arrives for a resource that does not exist.

CoAP also supports the Observe extension, where a client subscribes to a resource and the server pushes updates whenever its value changes — similar to publish/subscribe.`},
{s:'INTERNET OF THINGS', c:'CM-504', t:'essay', n:3, y:'Dec 2022, Mar/Apr 2024, Mar/Apr 2026',
q:`Explain stationary wireless sensor networks.`,
a:`A stationary wireless sensor network is a WSN in which sensor nodes stay fixed in place after deployment. Architecture: sensor nodes sense their surroundings and forward data, usually over multiple hops, to a sink node or gateway, which delivers it to the base station for analysis.

Characteristics: the topology is static, so routing is simpler and more stable than in mobile networks; nodes are usually battery-powered, so energy saving (duty cycling — sleeping most of the time) is still essential; and coverage depends entirely on where nodes were placed.

Applications: environmental monitoring (forests, rivers), precision agriculture, building and bridge health monitoring, and industrial plant monitoring. The contrast is a mobile WSN, where nodes move (on vehicles, animals or people) and the topology keeps changing.`},
{s:'INTERNET OF THINGS', c:'CM-504', t:'essay', n:2, y:'Nov 2024, Oct/Nov 2025',
q:`Explain MQTT protocol.`,
a:`MQTT (Message Queuing Telemetry Transport) is a lightweight publish/subscribe messaging protocol designed for constrained devices and low-bandwidth, unreliable networks. It runs over TCP and uses a central broker.

Working: a publisher sends a message to a topic (for example, home/temperature). The broker receives it and forwards it to every subscriber of that topic. Publishers and subscribers never talk to each other directly, which keeps devices decoupled.

Quality of Service (QoS): QoS 0 — at most once (fire and forget). QoS 1 — at least once (acknowledged, may duplicate). QoS 2 — exactly once (four-step handshake). Two extra features: retained messages (the broker stores the last message on a topic for new subscribers) and Last Will and Testament (the broker publishes a message if a client disconnects unexpectedly).`},
{s:'INTERNET OF THINGS', c:'CM-504', t:'essay', n:2, y:'Dec 2022, Nov 2023',
q:`Explain the service models in cloud computing.`,
a:`1) IaaS (Infrastructure as a Service) — the provider gives raw infrastructure: virtual machines, storage and networks. The user installs and manages the operating system and applications. Example: Amazon EC2. Maximum user control.

2) PaaS (Platform as a Service) — the provider gives a ready platform with operating system, databases and development tools. The user only deploys their application. Example: Google App Engine, Heroku. Less control, faster development.

3) SaaS (Software as a Service) — the provider gives finished software over the internet, used through a browser. Example: Gmail, Microsoft 365. The user manages nothing except their own data and settings.

In short: IaaS gives infrastructure, PaaS gives a platform, SaaS gives software — control decreases from IaaS to SaaS while provider management increases.`},
{s:'INTERNET OF THINGS', c:'CM-504', t:'essay', n:2, y:'Dec 2022, Mar/Apr 2026',
q:`Explain the 6LoWPAN protocol stack.`,
a:`6LoWPAN (IPv6 over Low-Power Wireless Personal Area Networks) lets tiny, battery-powered sensor devices use IPv6, so every sensor can have its own IP address and talk directly to the internet.

The problem: an IPv6 packet needs a minimum 1280-byte MTU, but an IEEE 802.15.4 frame carries at most 127 bytes. 6LoWPAN solves this with an adaptation layer between the link layer and the network layer, which does: 1) Header compression — the 40-byte IPv6 header is compressed to just a few bytes by removing information both sides already know. 2) Fragmentation and reassembly — large IPv6 packets are split into small frames and rebuilt at the destination. 3) Mesh routing — frames can hop through intermediate nodes to reach distant devices.

The stack is: Application (CoAP) → Transport (UDP) → Network (IPv6 with 6LoWPAN adaptation) → Link (IEEE 802.15.4) → Physical (2.4 GHz radio).`},
{s:'INTERNET OF THINGS', c:'CM-504', t:'essay', n:2, y:'Dec 2022, Mar/Apr 2026',
q:`Explain AMQP protocol.`,
a:`AMQP (Advanced Message Queuing Protocol) is an open standard for reliable business messaging between applications.

Broker model: a producer publishes a message to an exchange. The exchange routes it into queues through bindings and routing keys. Consumers then read messages from the queues. Queues can store messages until a consumer is ready, so producers and consumers do not need to be online at the same time.

Key strengths: guaranteed delivery with acknowledgements, message persistence (messages survive broker restarts), transactions, and security (SASL authentication and TLS). AMQP is heavier than MQTT and is used where reliability matters most — banking, enterprise systems and order processing — rather than on tiny sensors.`},
{s:'INTERNET OF THINGS', c:'CM-504', t:'essay', n:2, y:'May/June 2023, Nov 2024',
q:`Explain information theoretic self-management in wireless sensor networks.`,
a:`Self-management means sensor nodes organise and control themselves without a central controller. The information-theoretic approach makes those decisions using measures from information theory.

Each node estimates the information value of its data — for example, its entropy (how surprising or new the reading is) and how much it overlaps with what neighbours already reported. Based on this, the node decides on its own whether to sense, transmit, aggregate or sleep: redundant data is suppressed, only informative data is forwarded, and nodes sleep when they have nothing new to say.

Result: the network saves energy and bandwidth while keeping data quality high, and it adapts automatically when nodes fail or conditions change — no central manager is needed.`},
{s:'INTERNET OF THINGS', c:'CM-504', t:'essay', n:2, y:'Mar/Apr 2026, Oct/Nov 2025',
q:`Explain node behaviour in wireless sensor networks.`,
a:`A sensor node's behaviour is a cycle of states: sensing (collecting data), processing (filtering or aggregating), transmitting, receiving, idle (awake but inactive) and sleep (radio and processor off).

Energy management dominates behaviour: nodes use duty cycling — sleeping most of the time and waking briefly to sense or forward data — because the radio consumes the most power. Behaviour is also event-driven: a node wakes fully only when an event (such as movement or a threshold crossing) occurs.

Nodes adapt to their situation: when battery is low, a node reduces its activity; when a neighbour fails, nearby nodes take over its forwarding role; and faulty nodes are detected and excluded so bad data does not spread.`},
{s:'INTERNET OF THINGS', c:'CM-504', t:'essay', n:2, y:'May/June 2023, Nov 2023',
q:`Explain the service oriented architecture of IoT.`,
a:`Service Oriented Architecture (SOA) treats IoT as a set of loosely coupled services that can be discovered, combined and reused. It has four layers:

1) Sensing layer — sensors and actuators collect data and act on the physical world. 2) Network layer — the data is transmitted over wired or wireless networks. 3) Service layer — middleware that manages services: service discovery, composition (combining simple services into complex ones), and service management. 4) Interface layer — APIs and applications through which users interact with the system.

Benefits: services are reusable across applications, components can be replaced without rebuilding the system, and different technologies can interoperate because they communicate through standard service interfaces.`},
{s:'INTERNET OF THINGS', c:'CM-504', t:'essay', n:2, y:'May/June 2023, Nov 2023',
q:`Explain the working principle of NFC.`,
a:`NFC (Near Field Communication) works at 13.56 MHz by electromagnetic induction between two loop antennas placed very close together — typically within 4 cm (up to about 10 cm). When the initiator generates a radio field, the target device picks up power and data from that field.

Three modes: 1) Reader/writer — an active device (phone) reads or writes a passive tag (poster, product label). 2) Peer-to-peer — two active devices exchange data (sharing a contact or photo). 3) Card emulation — a phone acts like a contactless card for payments and tickets.

Active devices generate their own field; passive devices (tags, cards) have no battery and are powered by the initiator's field. The tiny range is deliberate — it makes NFC naturally secure against eavesdropping and ideal for payments and pairing.`},
{s:'INTERNET OF THINGS', c:'CM-504', t:'essay', n:2, y:'Dec 2022, Nov 2024',
q:`Explain the functional components of IoT.`,
a:`An IoT system has four functional components working together: 1) Sensing — sensors collect data from the physical world (temperature, motion, images). 2) Connectivity — networks (Wi-Fi, Bluetooth, cellular, LoRa) carry that data to the cloud or to other devices. 3) Data processing — software analyses the data, takes decisions, and may send commands back. 4) User interface — dashboards and apps let users view results and control devices.

Actuators complete the loop by acting on the world (switching on a motor, opening a valve). Running across all four components are management (device and network management) and security (authentication, encryption, access control).`},
{s:'INTERNET OF THINGS', c:'CM-504', t:'short', n:3, y:'May/June 2023, Nov 2023, Nov 2024',
q:`What are the features of AMQP?`,
a:`AMQP is an open standard for message queuing. Its features: reliable message delivery with acknowledgements, message routing through exchanges, bindings and queues, interoperability between different vendors' systems, message persistence (messages survive restarts), security through SASL authentication and TLS encryption, and support for transactions.`},
{s:'INTERNET OF THINGS', c:'CM-504', t:'short', n:3, y:'Mar/Apr 2024, May/June 2023, Nov 2024',
q:`What is cloud computing?`,
a:`Cloud computing is the on-demand delivery of computing resources — servers, storage, databases, networking and software — over the internet on a pay-as-you-go basis. Instead of owning hardware, users access a shared pool of configurable resources that can be rapidly provisioned and released with minimal management effort.`},
{s:'INTERNET OF THINGS', c:'CM-504', t:'short', n:2, y:'May/June 2023, Oct/Nov 2025',
q:`Define Internet of Things (IoT).`,
a:`The Internet of Things is a network of physical objects — devices, vehicles, appliances — embedded with sensors, software and connectivity that collect and exchange data over the internet, enabling them to be monitored and controlled remotely without human intervention.`},
{s:'INTERNET OF THINGS', c:'CM-504', t:'short', n:2, y:'Mar/Apr 2026, May/June 2023',
q:`What is MQTT?`,
a:`MQTT (Message Queuing Telemetry Transport) is a lightweight publish/subscribe messaging protocol designed for constrained devices and low-bandwidth, unreliable networks. Publishers send messages to topics on a central broker, which forwards them to all subscribers of those topics.`},
{s:'INTERNET OF THINGS', c:'CM-504', t:'short', n:2, y:'Mar/Apr 2024, Nov 2023',
q:`What are the types of sensor networks?`,
a:`Terrestrial — nodes deployed on land. Underground — nodes buried for soil and mining monitoring. Underwater — nodes in water using acoustic communication. Multimedia (WMSN) — nodes with cameras and microphones. Mobile — nodes that move on vehicles, animals or people.`},
{s:'INTERNET OF THINGS', c:'CM-504', t:'short', n:2, y:'Dec 2022, Nov 2024',
q:`List the applications of M2M communication.`,
a:`Smart metering (electricity, gas, water), fleet and vehicle tracking, remote patient health monitoring, industrial automation and predictive maintenance, smart agriculture (soil and weather sensing), ATM and point-of-sale connectivity, and smart-city services such as street lighting and waste management.`},
{s:'INTERNET OF THINGS', c:'CM-504', t:'short', n:2, y:'Mar/Apr 2026, Oct/Nov 2025',
q:`What are the components of IoT?`,
a:`The main components are: sensors (collect data), connectivity (networks that carry data), data processing (software that analyses data and decides actions), user interface (apps and dashboards for users), and actuators (devices that act on the physical world, such as motors and switches).`},
{s:'INTERNET OF THINGS', c:'CM-504', t:'short', n:2, y:'Dec 2022, Nov 2024',
q:`What are the features of IEEE 802.15.4?`,
a:`IEEE 802.15.4 is the low-rate wireless personal area network (LR-WPAN) standard. Features: low power consumption and low cost, data rates of 250 kbps in the 2.4 GHz band (also 20 and 40 kbps in the 868/915 MHz bands), star and peer-to-peer topologies, carrier-sense multiple access with collision avoidance (CSMA/CA), and it is the physical and MAC layer basis for Zigbee and 6LoWPAN.`},
{s:'INTERNET OF THINGS', c:'CM-504', t:'short', n:2, y:'Dec 2022, Nov 2023',
q:`What is the importance of cloud computing?`,
a:`Cloud computing removes the need to buy and maintain hardware, cutting costs to pay-as-you-go. It scales up or down on demand, is accessible from anywhere with an internet connection, provides automatic backup and disaster recovery, and lets users deploy applications quickly without managing infrastructure.`},
{s:'INTERNET OF THINGS', c:'CM-504', t:'short', n:2, y:'Mar/Apr 2024, Oct/Nov 2025',
q:`List the key features of M2M communication.`,
a:`Machines communicate directly with each other without human involvement. It enables remote monitoring and control, real-time data exchange, low power consumption for battery devices, wide-area coverage through cellular and LPWAN networks, and scalability to thousands of connected devices.`},
{s:'INTERNET OF THINGS', c:'CM-504', t:'short', n:2, y:'Dec 2022, Nov 2024',
q:`What is a cloud simulator?`,
a:`A cloud simulator is software that models cloud data centres, virtual machines, networks and resource-allocation policies on a single computer. The best-known example is CloudSim. It lets researchers and students test scheduling, load-balancing and energy policies and measure their results without paying for real cloud infrastructure.`},
{s:'PYTHON PROGRAMMING', c:'CM-505', t:'essay', n:3, y:'Mar/Apr 2024, Mar/Apr 2026, May/June 2023',
q:`Explain method overloading and method overriding with examples.`,
a:`Method overloading means defining multiple methods with the same name but different arguments. Python does not support it directly — if you define the same method twice, the second definition replaces the first. It is simulated with default arguments or *args:
def add(self, a, b=0):
    return a + b
This one method handles both add(5) and add(5, 3).

Method overriding means a child class redefines a method inherited from its parent class, giving it a new behaviour:
class Animal:
    def sound(self):
        print("Some sound")
class Dog(Animal):
    def sound(self):
        print("Bark")
When sound() is called on a Dog object, the child's version runs. Overloading is about the same name with different arguments; overriding is about a child replacing a parent's method.`},
{s:'PYTHON PROGRAMMING', c:'CM-505', t:'essay', n:3, y:'May/June 2023, Oct/Nov 2023, Oct/Nov 2024',
q:`Explain loop statements in Python.`,
a:`Loops repeat a block of statements. Python has two loop statements:

1) for loop — iterates over a sequence (list, tuple, string, range):
for i in range(1, 6):
    print(i)
This prints 1 to 5. It is used when the number of iterations is known.

2) while loop — repeats while a condition is true:
i = 1
while i <= 5:
    print(i)
    i += 1
It is used when the number of iterations depends on a condition.

Loops can be nested (a loop inside another loop). Loop control statements: break exits the loop immediately, continue skips to the next iteration, and pass does nothing (a placeholder).`},
{s:'PYTHON PROGRAMMING', c:'CM-505', t:'essay', n:2, y:'Mar/Apr 2024, May/June 2023',
q:`Explain conditional statements in Python.`,
a:`Conditional statements execute code only when a condition is true:

1) if — runs a block when the condition is true:
if marks >= 40:
    print("Pass")

2) if-else — chooses between two blocks:
if marks >= 40:
    print("Pass")
else:
    print("Fail")

3) elif ladder — tests several conditions in order:
if marks >= 90:
    print("A grade")
elif marks >= 75:
    print("B grade")
elif marks >= 40:
    print("C grade")
else:
    print("Fail")

4) Nested if — an if statement inside another if, used when a second condition matters only if the first is true. Python uses indentation (not braces) to mark the blocks.`},
{s:'PYTHON PROGRAMMING', c:'CM-505', t:'essay', n:2, y:'May/June 2023, Oct/Nov 2025',
q:`Explain input and output statements in Python.`,
a:`Input statement — input() reads a line typed by the user and always returns a string:
name = input("Enter your name: ")
age = int(input("Enter your age: "))
Convert the result with int() or float() when a number is needed.

Output statement — print() displays values on screen:
print("Hello")
print("Age is", age)
Formatting options: sep changes the separator between values (print(a, b, sep=", ")), end changes what is printed after the value (print("Hi", end=" ")), and f-strings embed values directly: print(f"My name is {name} and I am {age} years old").`},
{s:'PYTHON PROGRAMMING', c:'CM-505', t:'essay', n:2, y:'Oct/Nov 2023, Oct/Nov 2025',
q:`Explain tuple assignment in Python.`,
a:`Tuple assignment packs several values into a tuple and unpacks them back into variables in one statement.

Packing: t = 1, 2, 3 creates the tuple (1, 2, 3).
Unpacking: a, b, c = t assigns a = 1, b = 2, c = 3. The number of variables must match the number of values.

Two classic uses: 1) Swapping without a temporary variable: a, b = b, a. 2) A function returning multiple values:
def minmax(numbers):
    return min(numbers), max(numbers)
low, high = minmax([4, 1, 9, 2])
Here the function returns a tuple and it is unpacked directly into low and high.`},
{s:'PYTHON PROGRAMMING', c:'CM-505', t:'essay', n:2, y:'Oct/Nov 2023, Oct/Nov 2025',
q:`Explain the built-in data types in Python.`,
a:`Python's built-in data types: Numeric — int (whole numbers, example 10), float (decimals, example 3.14), complex (example 2+3j). Text — str (example "hello"). Boolean — bool (True or False). Sequence — list (ordered, changeable: [1, 2, 3]), tuple (ordered, unchangeable: (1, 2, 3)), range (sequence of numbers). Set — set (unordered, unique items: {1, 2, 3}), frozenset (unchangeable set). Mapping — dict (key-value pairs: {"name": "Asha", "age": 20}). None — NoneType, a single value None meaning "no value". Python is dynamically typed: the type is decided by the value assigned, and type() shows it.`},
{s:'PYTHON PROGRAMMING', c:'CM-505', t:'essay', n:2, y:'Dec 2022, Mar/Apr 2026',
q:`Write a Python program to accept numbers as a tuple using *args and print the tuple.`,
a:`When *args is used in a function definition, all extra positional arguments are collected into a tuple.

Program:
def show_tuple(*args):
    print("Tuple:", args)
    print("Number of elements:", len(args))

show_tuple(10, 20, 30, 40)
show_tuple("a", "b", "c")

Output:
Tuple: (10, 20, 30, 40)
Number of elements: 4
Tuple: ('a', 'b', 'c')
Number of elements: 3

Explanation: show_tuple accepts any number of arguments; *args packs them into a tuple named args inside the function, and the program prints that tuple.`},
{s:'PYTHON PROGRAMMING', c:'CM-505', t:'essay', n:2, y:'Dec 2022, Mar/Apr 2026',
q:`Explain the syntax of a function in Python and write a program to print the first 25 Fibonacci numbers using a function.`,
a:`Function syntax:
def function_name(parameters):
    statements
    return value
def defines the function, parameters are the inputs, and return sends a value back to the caller. A function must be defined before it is called.

Program:
def fibonacci(n):
    a, b = 0, 1
    for i in range(n):
        print(a, end=" ")
        a, b = b, a + b

fibonacci(25)

Output: 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181 6765 10946 17711 28657 46368

Explanation: the series starts with 0 and 1, and each next number is the sum of the previous two. The tuple assignment a, b = b, a + b updates both values in one step, and the loop runs 25 times.`},
{s:'PYTHON PROGRAMMING', c:'CM-505', t:'short', n:3, y:'Dec 2022, Mar/Apr 2024, Oct/Nov 2023',
q:`What is data abstraction?`,
a:`Data abstraction means showing only the essential features of an object and hiding the implementation details. A driver uses a car's steering and pedals without knowing how the engine works internally. In Python it is achieved with abstract classes (using the abc module) and by keeping internal details private, so users interact with a simple interface while the complexity stays hidden.`},
{s:'PYTHON PROGRAMMING', c:'CM-505', t:'short', n:2, y:'May/June 2023, Oct/Nov 2024',
q:`What is a class?`,
a:`A class is a blueprint or template for creating objects. It defines the attributes (data) and methods (functions) that all objects of that type will have. Example: class Student: defines the structure, and s1 = Student() creates an actual object (instance) from it.`},
{s:'PYTHON PROGRAMMING', c:'CM-505', t:'short', n:2, y:'Mar/Apr 2024, Oct/Nov 2024',
q:`How do you clone a list in Python?`,
a:`Cloning means creating an independent copy of a list. Three common ways: new = old[:] (slicing), new = old.copy(), and new = list(old). Note that these are shallow copies — the outer list is independent, but nested objects inside are still shared. For a fully independent copy including nested objects, use copy.deepcopy(old).`},
{s:'PYTHON PROGRAMMING', c:'CM-505', t:'short', n:2, y:'Mar/Apr 2024, May/June 2023',
q:`What are the steps to process a file in Python?`,
a:`1) Open the file with open() in the needed mode. 2) Read from it (read(), readline(), readlines()) or write to it (write(), writelines()). 3) Close the file with close() to free resources and save changes. Best practice is the with statement — with open("data.txt") as f: — which closes the file automatically, even if an error occurs.`},
{s:'PYTHON PROGRAMMING', c:'CM-505', t:'short', n:2, y:'Dec 2022, Mar/Apr 2026',
q:`Give the syntax for opening a file and list the file modes in Python.`,
a:`Syntax: file_object = open("filename", "mode"). Modes: r — read (default, file must exist). w — write (creates or overwrites). a — append (adds at the end). x — exclusive creation (fails if the file exists). b — binary mode (example: rb, wb). t — text mode (default). + — read and write together (example: r+ opens for reading and writing).`}
];
