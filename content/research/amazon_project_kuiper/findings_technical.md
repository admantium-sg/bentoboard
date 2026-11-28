# Amazon Project Kuiper (now Amazon Leo) - Technical Specifications

## Overview

Amazon Leo (formerly Project Kuiper) is Amazon's low Earth orbit (LEO) satellite broadband constellation. Originally named Project Kuiper after the Kuiper Belt, it was rebranded to Amazon Leo in November 2025. The system is designed to deliver high-speed, low-latency broadband internet to underserved and remote areas globally.

---

## 1. Satellite Design

### Physical Specifications
- **Mass**: ~571 kg per production satellite
- **Orbital Shells**: Three altitude layers
  - Shell 1: 590 km altitude, 28 planes × 27 sats = 756 satellites, 33° inclination
  - Shell 2: 610 km altitude, 36 planes × 36 sats = 1,296 satellites, 42° inclination
  - Shell 3: 630 km altitude, 34 planes × 34 sats = 1,156 satellites, 51.9° inclination
- **Total Constellation**: 3,236 satellites (Gen1)
- **Gen2 Expansion**: FCC approved 4,500 additional satellites (total planned: 7,727)

### Key Technologies

**Prometheus Baseband Chip**
- Custom silicon developed by Amazon's semiconductor team in Kirkland, Washington
- Processes up to 1 Tbps of data per satellite
- Used in every satellite, customer terminal, and ground gateway
- Reduces mass, power consumption, and manufacturing cost vs. traditional chip architectures

**Optical Inter-Satellite Links (OISL)**
- Infrared laser connections between satellites
- Up to 100 Gbps per link
- Creates mesh network for in-space data routing without ground hops at every segment
- Architecturally similar to Starlink v2 laser links (distinct from OneWeb's bent-pipe system)

**Brightness Mitigation**
- Dielectric mirror coating to reduce solar reflectivity
- Addresses astronomer concerns (similar issues affected early Starlink satellites)

### Spectrum
- Ka-band frequencies (17–30 GHz) for user links
- Custom RF and optical capabilities for gateway communications

---

## 2. Launch Vehicles

Amazon Leo has secured contracts with **four launch providers** across **five vehicle types** — the largest commercial launch procurement in history:

| Vehicle | Provider | Launches Booked | Status |
|---------|---------|-----------------|--------|
| Atlas V 551 | ULA | 9 | Active |
| Falcon 9 | SpaceX | 13+ | Active |
| Ariane 64 | Arianespace | 18 | Active (first launch Feb 2026) |
| Vulcan Centaur | ULA | 38 | Upcoming |
| New Glenn | Blue Origin | 12–27 | Upcoming |

### Key Launch Facts
- **First operational launch**: April 28, 2025 (Atlas V, 27 satellites, Kuiper-1 mission)
- **First Ariane 6 launch**: February 2026 (LE-01 mission)
- **Prototype launches**: October 2023 (KuiperSat-1 and KuiperSat-2 on Atlas V)
- **Launch capacity per mission**: Atlas V carries up to 27 satellites per flight
- **Launch site**: Cape Canaveral Space Force Station (SLC-41)

### Deployment Status (as of July 2026)
- ~375+ satellites in orbit across 12 successful missions
- FCC deadline: 1,618 satellites (50% of Gen1) by July 2026
- Full Gen1 deployment deadline: July 2029

---

## 3. Ground Infrastructure

### Gateway Earth Stations
- **300+ planned ground stations** worldwide (announced at AWS re:Invent)
- Gateway antennas securely send/receive data to/from satellites
- Telemetry, Tracking, and Control (TT&C) antennas for satellite operations
- Each gateway links to nearest AWS Region via dedicated fiber

### AWS Integration
- Software-defined network running on AWS infrastructure
- Dynamic traffic management for capacity optimization
- Private connectivity option: enterprise/government customers can move data directly into AWS without public internet
- Backend systems (sign-up, billing, provisioning, customer service) hosted on AWS
- Partners: NTT, Verizon, Vodafone (pilot program)

### Customer Terminals
All terminals powered by Prometheus chip with electronically steered phased-array antennas (Ka-band):

| Terminal | Target Use | Key Feature |
|----------|------------|-------------|
| **Leo Nano** | Portable / IoT | Compact form factor, mobile/IoT applications |
| **Leo Pro** | Residential / SMB | Up to 400 Mbps, ~30 cm dish, target price <$400 |
| **Leo Ultra** | Enterprise / Aviation | Up to 1 Gbps, large aperture for high-throughput |

---

## 4. Coverage and Network Capacity

### Coverage Area
- Latitude coverage: approximately 56°S to 56°N (covers vast majority of world's population)
- Multi-shell architecture provides layered, overlapping coverage with built-in redundancy
- Global reach including remote and underserved areas

### Network Architecture
- Constellation of 3,000+ satellites in LEO
- Connected by high-speed optical inter-satellite links
- Communicates with secure global network of gateway stations, fiber, and internet connection points
- Software-defined network dynamically manages data traffic

### Direct-to-Device Expansion
- In January 2026, Amazon announced acquisition of Globalstar (24 LEO satellites, 28 ground gateways)
- Adds licensed Band 53/n53 spectrum
- Regulatory approvals in 100+ countries
- Enables direct-to-device satellite connectivity (text, data, emergency services)
- Transaction expected to close in 2027

---

## 5. Unique Technical Features & Innovations

1. **Prometheus Chip**: Industry-leading custom silicon processing up to 1 Tbps per satellite, consolidating multiple traditional chips into one

2. **Multi-Shell Orbital Architecture**: Unique three-altitude-shell design (590/610/630 km) vs. competitors' single-shell approach, enabling optimized coverage for different latitude bands

3. **OISL Mesh Networking**: Full optical inter-satellite link mesh allowing data to route through space without requiring ground station line-of-sight at every hop

4. **AWS-Native Design**: Complete integration with Amazon Web Services for network management, private connectivity, and cloud service delivery

5. **Software-Defined Network**: Dynamic capacity allocation and traffic management across the constellation

6. **Multi-Launcher Strategy**: Unprecedented use of 5 different launch vehicles from 4 providers for deployment flexibility

7. **Dielectric Mirror Coating**: Novel brightness mitigation to reduce impact on ground-based astronomy

8. **Direct-to-Device via Globalstar**: Acquisition adds cellular-compatible spectrum and direct-to-device capability

---

## Sources

- https://orbitalradar.com/satellites/operator/amazon-leo
- https://space.skyrocket.de/doc_sdat/kuipersat-1.htm
- https://www.aboutamazon.com/news/innovation-at-amazon/amazon-project-kuiper-aws
- https://www.aboutamazon.com/what-we-do/devices-services/amazon-leo
- https://www.ulalaunch.com/missions/missions-details/2025/04/28/united-launch-alliance-successfully-launches-amazon-s-first-operational-satellites
- https://www.datacenterdynamics.com/en/news/amazon-leo-reveals-plans-for-installation-of-more-than-300-ground-stations/

---

*Research completed: July 31, 2026*
