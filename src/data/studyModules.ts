import { StudyModule } from '../types';

export const studyModules: StudyModule[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    description: 'Getting started with FortiGate and understanding the fundamentals',
    icon: '📚',
    difficulty: 'Beginner',
    estimatedTime: '2-3 hours',
    totalXP: 800,
    chapters: [
      {
        id: 'getting-started',
        title: 'Getting Started',
        description: 'Initial setup and basic concepts',
        xpReward: 200,
        isUnlocked: true,
        isCompleted: false,
        checkpoints: [
          {
            id: 'intro-overview',
            title: 'FortiGate Overview',
            description: 'Understanding FortiGate architecture and capabilities',
            type: 'reading',
            xpReward: 50,
            isCompleted: false,
            pdfPages: [13, 14, 15],
            tips: [
              'FortiGate is a next-generation firewall with integrated security services',
              'Pay attention to the Security Fabric concept',
              'Understand the difference between hardware and virtual appliances'
            ],
            keyPoints: [
              'FortiGate combines firewall, VPN, and UTM in one platform',
              'Security Fabric provides centralized management and visibility',
              'Supports both on-premises and cloud deployments',
              'FortiOS is the underlying operating system'
            ]
          },
          {
            id: 'initial-setup',
            title: 'Initial Setup and Configuration',
            description: 'First-time setup procedures and basic configuration',
            type: 'lab',
            xpReward: 75,
            isCompleted: false,
            pdfPages: [16, 17, 18, 19],
            tips: [
              'Always change default passwords immediately',
              'Document your initial configuration settings',
              'Use HTTPS for secure web management access'
            ],
            keyPoints: [
              'Default admin credentials and how to change them',
              'Initial network interface configuration',
              'Web GUI and CLI access methods',
              'Basic system settings and time configuration'
            ]
          },
          {
            id: 'getting-started-quiz',
            title: 'Getting Started Knowledge Check',
            description: 'Test your understanding of FortiGate basics',
            type: 'quiz',
            xpReward: 75,
            isCompleted: false,
            pdfPages: [13, 19],
            tips: [
              'Review the FortiGate architecture before taking the quiz',
              'Focus on understanding initial setup procedures'
            ],
            keyPoints: [],
            quiz: [
              {
                id: 'q1',
                question: 'What is the default username for FortiGate initial login?',
                options: ['admin', 'root', 'fortinet', 'administrator'],
                correctAnswer: 0,
                explanation: 'The default username is "admin" with no password for initial setup. This should be changed immediately for security.'
              },
              {
                id: 'q2',
                question: 'Which protocol is recommended for secure FortiGate management?',
                options: ['HTTP', 'HTTPS', 'Telnet', 'FTP'],
                correctAnswer: 1,
                explanation: 'HTTPS should be used for secure web-based management to encrypt the management traffic.'
              },
              {
                id: 'q3',
                question: 'What is FortiOS?',
                options: ['A management software', 'The operating system running on FortiGate', 'A security service', 'A network protocol'],
                correctAnswer: 1,
                explanation: 'FortiOS is the proprietary operating system that runs on FortiGate devices, providing all security and networking functions.'
              }
            ]
          }
        ]
      },
      {
        id: 'system-administration',
        title: 'System Administration',
        description: 'Administrative tasks and system management',
        xpReward: 300,
        isUnlocked: false,
        isCompleted: false,
        checkpoints: [
          {
            id: 'admin-profiles',
            title: 'Administrator Profiles and Access',
            description: 'Managing administrator accounts and access control',
            type: 'reading',
            xpReward: 100,
            isCompleted: false,
            pdfPages: [20, 21, 22, 23],
            tips: [
              'Use principle of least privilege for admin accounts',
              'Regular admin accounts should have limited scope',
              'Enable two-factor authentication when possible'
            ],
            keyPoints: [
              'Different administrator profile types and permissions',
              'Creating and managing admin accounts',
              'Access control and trusted hosts configuration',
              'Password policies and security best practices'
            ]
          },
          {
            id: 'system-settings',
            title: 'System Settings and Configuration',
            description: 'Core system configuration and settings',
            type: 'lab',
            xpReward: 100,
            isCompleted: false,
            pdfPages: [24, 25, 26, 27],
            tips: [
              'Configure NTP for accurate time synchronization',
              'Set up proper DNS settings for name resolution',
              'Configure SNMP for monitoring if required'
            ],
            keyPoints: [
              'System time and NTP configuration',
              'DNS settings and name resolution',
              'SNMP configuration for monitoring',
              'System resource monitoring and alerts'
            ]
          },
          {
            id: 'backup-restore',
            title: 'Backup and Restore Procedures',
            description: 'Configuration backup and disaster recovery',
            type: 'lab',
            xpReward: 100,
            isCompleted: false,
            pdfPages: [28, 29, 30],
            tips: [
              'Schedule regular automated backups',
              'Test restore procedures in a lab environment',
              'Store backups in secure, off-site locations'
            ],
            keyPoints: [
              'Configuration backup methods and scheduling',
              'Restore procedures and considerations',
              'Firmware upgrade and downgrade processes',
              'Configuration migration between devices'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'networking',
    title: 'Networking',
    description: 'Network interfaces, routing, and connectivity',
    icon: '🌐',
    difficulty: 'Intermediate',
    estimatedTime: '6-8 hours',
    totalXP: 1800,
    chapters: [
      {
        id: 'interfaces',
        title: 'Interfaces',
        description: 'Network interface configuration and management',
        xpReward: 400,
        isUnlocked: false,
        isCompleted: false,
        checkpoints: [
          {
            id: 'physical-interfaces',
            title: 'Physical Interface Configuration',
            description: 'Configuring physical network interfaces',
            type: 'reading',
            xpReward: 100,
            isCompleted: false,
            pdfPages: [31, 32, 33, 34],
            tips: [
              'Understand interface naming conventions',
              'Configure appropriate MTU sizes for your network',
              'Use descriptive interface aliases for documentation'
            ],
            keyPoints: [
              'Interface types and naming conventions',
              'IP address assignment methods (static, DHCP)',
              'Interface roles and security zones',
              'Administrative access configuration per interface'
            ]
          },
          {
            id: 'vlan-interfaces',
            title: 'VLAN Interfaces',
            description: 'Virtual LAN interface configuration',
            type: 'lab',
            xpReward: 150,
            isCompleted: false,
            pdfPages: [35, 36, 37, 38],
            tips: [
              'Plan your VLAN ID scheme carefully',
              'Document VLAN purposes and assignments',
              'Consider VLAN security implications'
            ],
            keyPoints: [
              'VLAN interface creation and configuration',
              'VLAN tagging and untagging',
              'Inter-VLAN routing considerations',
              'VLAN security best practices'
            ]
          },
          {
            id: 'interface-aggregation',
            title: 'Interface Aggregation',
            description: 'Link aggregation and redundancy',
            type: 'reading',
            xpReward: 100,
            isCompleted: false,
            pdfPages: [39, 40, 41],
            tips: [
              'Use LACP for dynamic link aggregation',
              'Ensure consistent configuration on both ends',
              'Monitor link status and performance'
            ],
            keyPoints: [
              'Link Aggregation Control Protocol (LACP)',
              'Static link aggregation configuration',
              'Load balancing algorithms',
              'Redundancy and failover mechanisms'
            ]
          },
          {
            id: 'interfaces-quiz',
            title: 'Interface Configuration Quiz',
            description: 'Test your interface configuration knowledge',
            type: 'quiz',
            xpReward: 50,
            isCompleted: false,
            pdfPages: [31, 41],
            tips: [
              'Review interface types and their use cases',
              'Understand VLAN concepts thoroughly'
            ],
            keyPoints: [],
            quiz: [
              {
                id: 'q4',
                question: 'What is the primary purpose of VLAN interfaces?',
                options: ['Increase bandwidth', 'Network segmentation', 'Reduce latency', 'Improve security only'],
                correctAnswer: 1,
                explanation: 'VLAN interfaces are primarily used for network segmentation, allowing you to create separate broadcast domains and apply different security policies.'
              },
              {
                id: 'q5',
                question: 'Which protocol is commonly used for dynamic link aggregation?',
                options: ['STP', 'LACP', 'OSPF', 'BGP'],
                correctAnswer: 1,
                explanation: 'LACP (Link Aggregation Control Protocol) is used for dynamic link aggregation, automatically negotiating and managing aggregated links.'
              }
            ]
          }
        ]
      },
      {
        id: 'routing',
        title: 'Routing',
        description: 'Static and dynamic routing configuration',
        xpReward: 500,
        isUnlocked: false,
        isCompleted: false,
        checkpoints: [
          {
            id: 'static-routing',
            title: 'Static Routing',
            description: 'Configuring static routes and default gateways',
            type: 'reading',
            xpReward: 100,
            isCompleted: false,
            pdfPages: [42, 43, 44, 45],
            tips: [
              'Use static routes for predictable network paths',
              'Configure backup routes with higher administrative distances',
              'Document all static route purposes'
            ],
            keyPoints: [
              'Static route configuration syntax',
              'Administrative distance and route priority',
              'Default route configuration',
              'Route monitoring and troubleshooting'
            ]
          },
          {
            id: 'dynamic-routing',
            title: 'Dynamic Routing Protocols',
            description: 'OSPF, BGP, and RIP configuration',
            type: 'reading',
            xpReward: 150,
            isCompleted: false,
            pdfPages: [46, 47, 48, 49, 50, 51],
            tips: [
              'Choose the right routing protocol for your network size',
              'Understand area design for OSPF',
              'Configure proper authentication for routing protocols'
            ],
            keyPoints: [
              'OSPF configuration and area design',
              'BGP for internet connectivity and AS routing',
              'RIP for simple networks',
              'Routing protocol authentication and security'
            ]
          },
          {
            id: 'policy-routing',
            title: 'Policy-Based Routing',
            description: 'Advanced routing based on policies',
            type: 'lab',
            xpReward: 150,
            isCompleted: false,
            pdfPages: [52, 53, 54],
            tips: [
              'Use policy routing for traffic engineering',
              'Consider load balancing across multiple paths',
              'Test policy routing thoroughly before deployment'
            ],
            keyPoints: [
              'Policy-based routing configuration',
              'Traffic matching criteria',
              'Load balancing and failover',
              'Monitoring and troubleshooting policy routes'
            ]
          },
          {
            id: 'routing-lab',
            title: 'Routing Configuration Lab',
            description: 'Hands-on routing configuration practice',
            type: 'lab',
            xpReward: 100,
            isCompleted: false,
            pdfPages: [42, 54],
            tips: [
              'Start with static routes before implementing dynamic protocols',
              'Use show commands to verify routing table',
              'Test connectivity after each configuration change'
            ],
            keyPoints: [
              'Practical routing configuration steps',
              'Verification and troubleshooting commands',
              'Common routing issues and solutions'
            ]
          }
        ]
      },
      {
        id: 'switching',
        title: 'Switching',
        description: 'Layer 2 switching and VLAN management',
        xpReward: 400,
        isUnlocked: false,
        isCompleted: false,
        checkpoints: [
          {
            id: 'basic-switching',
            title: 'Basic Switching Concepts',
            description: 'Understanding Layer 2 switching',
            type: 'reading',
            xpReward: 100,
            isCompleted: false,
            pdfPages: [55, 56, 57],
            tips: [
              'Understand MAC address learning and aging',
              'Know the difference between hubs and switches',
              'Learn about collision and broadcast domains'
            ],
            keyPoints: [
              'MAC address table and learning process',
              'Switching vs. routing decisions',
              'Broadcast and collision domains',
              'Switch port configuration basics'
            ]
          },
          {
            id: 'vlan-management',
            title: 'VLAN Management',
            description: 'Advanced VLAN configuration and management',
            type: 'lab',
            xpReward: 150,
            isCompleted: false,
            pdfPages: [58, 59, 60, 61],
            tips: [
              'Plan VLAN numbering scheme organization-wide',
              'Use descriptive VLAN names',
              'Implement VLAN security best practices'
            ],
            keyPoints: [
              'VLAN creation and management',
              'Trunk and access port configuration',
              'VLAN Trunking Protocol (VTP) considerations',
              'Inter-VLAN routing setup'
            ]
          },
          {
            id: 'stp-configuration',
            title: 'Spanning Tree Protocol',
            description: 'STP configuration and loop prevention',
            type: 'reading',
            xpReward: 100,
            isCompleted: false,
            pdfPages: [62, 63, 64],
            tips: [
              'Understand root bridge election process',
              'Configure STP priorities strategically',
              'Monitor for topology changes'
            ],
            keyPoints: [
              'STP operation and loop prevention',
              'Root bridge selection and priority',
              'Port states and transitions',
              'RSTP and MSTP variants'
            ]
          },
          {
            id: 'switching-quiz',
            title: 'Switching Knowledge Check',
            description: 'Test your switching and VLAN knowledge',
            type: 'quiz',
            xpReward: 50,
            isCompleted: false,
            pdfPages: [55, 64],
            tips: [
              'Review VLAN concepts and STP operation',
              'Understand the difference between access and trunk ports'
            ],
            keyPoints: [],
            quiz: [
              {
                id: 'q6',
                question: 'What is the primary purpose of Spanning Tree Protocol (STP)?',
                options: ['Increase bandwidth', 'Prevent loops', 'Load balancing', 'Security'],
                correctAnswer: 1,
                explanation: 'STP prevents loops in switched networks by blocking redundant paths while maintaining connectivity.'
              },
              {
                id: 'q7',
                question: 'What type of port carries traffic for multiple VLANs?',
                options: ['Access port', 'Trunk port', 'Mirror port', 'Management port'],
                correctAnswer: 1,
                explanation: 'Trunk ports carry traffic for multiple VLANs using VLAN tagging to identify which VLAN each frame belongs to.'
              }
            ]
          }
        ]
      },
      {
        id: 'dhcp-dns',
        title: 'DHCP and DNS',
        description: 'Network services configuration',
        xpReward: 500,
        isUnlocked: false,
        isCompleted: false,
        checkpoints: [
          {
            id: 'dhcp-server',
            title: 'DHCP Server Configuration',
            description: 'Setting up and managing DHCP services',
            type: 'lab',
            xpReward: 150,
            isCompleted: false,
            pdfPages: [65, 66, 67, 68],
            tips: [
              'Plan IP address ranges carefully to avoid conflicts',
              'Configure appropriate lease times',
              'Set up DHCP reservations for servers'
            ],
            keyPoints: [
              'DHCP scope and range configuration',
              'Lease time and renewal settings',
              'DHCP options and custom settings',
              'DHCP reservations and exclusions'
            ]
          },
          {
            id: 'dns-configuration',
            title: 'DNS Configuration',
            description: 'DNS server and resolution setup',
            type: 'reading',
            xpReward: 100,
            isCompleted: false,
            pdfPages: [69, 70, 71],
            tips: [
              'Use reliable public DNS servers as forwarders',
              'Configure DNS caching for performance',
              'Set up reverse DNS zones when needed'
            ],
            keyPoints: [
              'DNS server configuration and forwarders',
              'DNS caching and performance optimization',
              'DNS security considerations',
              'Troubleshooting DNS resolution issues'
            ]
          },
          {
            id: 'dhcp-relay',
            title: 'DHCP Relay Configuration',
            description: 'DHCP relay for multi-subnet environments',
            type: 'lab',
            xpReward: 100,
            isCompleted: false,
            pdfPages: [72, 73],
            tips: [
              'Configure DHCP relay on router interfaces',
              'Ensure proper routing between DHCP server and clients',
              'Monitor DHCP relay statistics'
            ],
            keyPoints: [
              'DHCP relay agent configuration',
              'Multi-subnet DHCP deployment',
              'DHCP relay troubleshooting',
              'Performance and scalability considerations'
            ]
          },
          {
            id: 'network-services-quiz',
            title: 'Network Services Quiz',
            description: 'Test your DHCP and DNS knowledge',
            type: 'quiz',
            xpReward: 150,
            isCompleted: false,
            pdfPages: [65, 73],
            tips: [
              'Review DHCP lease process and DNS resolution',
              'Understand DHCP relay functionality'
            ],
            keyPoints: [],
            quiz: [
              {
                id: 'q8',
                question: 'What is the purpose of DHCP lease time?',
                options: ['Security', 'IP address reuse', 'Performance', 'Monitoring'],
                correctAnswer: 1,
                explanation: 'DHCP lease time determines how long a client can use an IP address before needing to renew it, allowing for efficient IP address reuse.'
              },
              {
                id: 'q9',
                question: 'When is DHCP relay needed?',
                options: ['Single subnet only', 'Multiple subnets', 'DNS resolution', 'Security purposes'],
                correctAnswer: 1,
                explanation: 'DHCP relay is needed when DHCP clients and server are on different subnets, as DHCP broadcasts do not cross router boundaries.'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'security-policies',
    title: 'Security Policies',
    description: 'Firewall policies and security rule configuration',
    icon: '🔒',
    difficulty: 'Intermediate',
    estimatedTime: '8-10 hours',
    totalXP: 2200,
    chapters: [
      {
        id: 'firewall-policies',
        title: 'Firewall Policies',
        description: 'Creating and managing firewall security policies',
        xpReward: 600,
        isUnlocked: false,
        isCompleted: false,
        checkpoints: [
          {
            id: 'policy-fundamentals',
            title: 'Firewall Policy Fundamentals',
            description: 'Understanding firewall policy concepts and structure',
            type: 'reading',
            xpReward: 150,
            isCompleted: false,
            pdfPages: [74, 75, 76, 77, 78],
            tips: [
              'Policies are processed from top to bottom',
              'First matching policy determines the action',
              'Always include logging for security monitoring'
            ],
            keyPoints: [
              'Policy evaluation order and matching logic',
              'Source and destination zones configuration',
              'Address objects and groups',
              'Service objects and custom services'
            ]
          },
          {
            id: 'policy-creation',
            title: 'Creating Security Policies',
            description: 'Step-by-step policy creation process',
            type: 'lab',
            xpReward: 200,
            isCompleted: false,
            pdfPages: [79, 80, 81, 82, 83],
            tips: [
              'Start with deny-all policy and add specific allows',
              'Use descriptive policy names and comments',
              'Test policies thoroughly before production deployment'
            ],
            keyPoints: [
              'Policy creation wizard and manual configuration',
              'Action types: Accept, Deny, Reject',
              'Logging and monitoring configuration',
              'Policy scheduling and time-based rules'
            ]
          },
          {
            id: 'nat-policies',
            title: 'NAT Policies',
            description: 'Network Address Translation configuration',
            type: 'lab',
            xpReward: 150,
            isCompleted: false,
            pdfPages: [84, 85, 86, 87],
            tips: [
              'Understand different NAT types and use cases',
              'Configure source NAT for outbound traffic',
              'Use destination NAT for inbound services'
            ],
            keyPoints: [
              'Source NAT (SNAT) configuration',
              'Destination NAT (DNAT) for port forwarding',
              'NAT pool configuration and management',
              'NAT policy troubleshooting'
            ]
          },
          {
            id: 'policy-optimization',
            title: 'Policy Optimization',
            description: 'Optimizing firewall policies for performance',
            type: 'reading',
            xpReward: 100,
            isCompleted: false,
            pdfPages: [88, 89, 90],
            tips: [
              'Place most frequently matched policies at the top',
              'Consolidate similar policies where possible',
              'Regular policy review and cleanup'
            ],
            keyPoints: [
              'Policy consolidation techniques',
              'Performance impact of policy order',
              'Policy usage statistics and analysis',
              'Best practices for policy management'
            ]
          }
        ]
      },
      {
        id: 'authentication',
        title: 'Authentication',
        description: 'User authentication and access control',
        xpReward: 500,
        isUnlocked: false,
        isCompleted: false,
        checkpoints: [
          {
            id: 'local-users',
            title: 'Local User Authentication',
            description: 'Managing local user accounts and groups',
            type: 'reading',
            xpReward: 100,
            isCompleted: false,
            pdfPages: [91, 92, 93],
            tips: [
              'Use strong password policies',
              'Organize users into logical groups',
              'Regular review of user accounts'
            ],
            keyPoints: [
              'Local user account creation and management',
              'User groups and group policies',
              'Password policies and complexity requirements',
              'Account lockout and security settings'
            ]
          },
          {
            id: 'external-auth',
            title: 'External Authentication',
            description: 'LDAP, RADIUS, and other external authentication methods',
            type: 'lab',
            xpReward: 200,
            isCompleted: false,
            pdfPages: [94, 95, 96, 97, 98],
            tips: [
              'Test external authentication thoroughly',
              'Configure fallback to local authentication',
              'Monitor authentication logs regularly'
            ],
            keyPoints: [
              'LDAP server configuration and integration',
              'RADIUS authentication setup',
              'Active Directory integration',
              'Authentication fallback mechanisms'
            ]
          },
          {
            id: 'sso-configuration',
            title: 'Single Sign-On (SSO)',
            description: 'Implementing SSO for seamless user experience',
            type: 'reading',
            xpReward: 100,
            isCompleted: false,
            pdfPages: [99, 100, 101],
            tips: [
              'Plan SSO deployment carefully',
              'Consider security implications of SSO',
              'Test SSO with different client types'
            ],
            keyPoints: [
              'SSO concepts and benefits',
              'SAML and other SSO protocols',
              'SSO configuration and testing',
              'Troubleshooting SSO issues'
            ]
          },
          {
            id: 'auth-policies',
            title: 'Authentication Policies',
            description: 'Creating policies that require user authentication',
            type: 'lab',
            xpReward: 100,
            isCompleted: false,
            pdfPages: [102, 103, 104],
            tips: [
              'Apply authentication where security is critical',
              'Consider user experience in policy design',
              'Monitor authentication success and failure rates'
            ],
            keyPoints: [
              'Authentication policy configuration',
              'User group-based policy assignment',
              'Authentication exemptions and exceptions',
              'Monitoring and reporting authentication events'
            ]
          }
        ]
      },
      {
        id: 'ssl-vpn',
        title: 'SSL VPN',
        description: 'SSL VPN configuration and management',
        xpReward: 600,
        isUnlocked: false,
        isCompleted: false,
        checkpoints: [
          {
            id: 'ssl-vpn-basics',
            title: 'SSL VPN Fundamentals',
            description: 'Understanding SSL VPN concepts and architecture',
            type: 'reading',
            xpReward: 100,
            isCompleted: false,
            pdfPages: [105, 106, 107, 108],
            tips: [
              'Understand the difference between web mode and tunnel mode',
              'Plan IP address allocation for VPN clients',
              'Consider certificate requirements'
            ],
            keyPoints: [
              'SSL VPN vs IPSec VPN comparison',
              'Web mode vs tunnel mode operation',
              'SSL VPN client types and requirements',
              'Certificate management for SSL VPN'
            ]
          },
          {
            id: 'ssl-vpn-config',
            title: 'SSL VPN Configuration',
            description: 'Step-by-step SSL VPN setup',
            type: 'lab',
            xpReward: 200,
            isCompleted: false,
            pdfPages: [109, 110, 111, 112, 113],
            tips: [
              'Configure SSL VPN portal for user access',
              'Set up appropriate access policies',
              'Test connectivity from different client types'
            ],
            keyPoints: [
              'SSL VPN portal configuration',
              'User and group access permissions',
              'Split tunneling configuration',
              'SSL VPN client software deployment'
            ]
          },
          {
            id: 'ssl-vpn-security',
            title: 'SSL VPN Security',
            description: 'Securing SSL VPN connections and access',
            type: 'reading',
            xpReward: 150,
            isCompleted: false,
            pdfPages: [114, 115, 116],
            tips: [
              'Implement strong authentication for VPN access',
              'Use host checking to verify client security',
              'Monitor VPN usage and access patterns'
            ],
            keyPoints: [
              'Multi-factor authentication for SSL VPN',
              'Host checking and endpoint security',
              'SSL VPN access logging and monitoring',
              'Security best practices for remote access'
            ]
          },
          {
            id: 'ssl-vpn-troubleshooting',
            title: 'SSL VPN Troubleshooting',
            description: 'Common SSL VPN issues and solutions',
            type: 'lab',
            xpReward: 150,
            isCompleted: false,
            pdfPages: [117, 118, 119],
            tips: [
              'Use debug commands to diagnose connection issues',
              'Check certificate validity and trust chains',
              'Verify firewall policies for VPN traffic'
            ],
            keyPoints: [
              'Common SSL VPN connectivity issues',
              'Debug commands and log analysis',
              'Certificate troubleshooting',
              'Performance optimization techniques'
            ]
          }
        ]
      },
      {
        id: 'ipsec-vpn',
        title: 'IPSec VPN',
        description: 'IPSec VPN configuration for site-to-site connectivity',
        xpReward: 500,
        isUnlocked: false,
        isCompleted: false,
        checkpoints: [
          {
            id: 'ipsec-fundamentals',
            title: 'IPSec VPN Fundamentals',
            description: 'Understanding IPSec protocols and concepts',
            type: 'reading',
            xpReward: 100,
            isCompleted: false,
            pdfPages: [120, 121, 122, 123],
            tips: [
              'Understand IKE phases and negotiation process',
              'Learn about different IPSec modes',
              'Know the difference between AH and ESP protocols'
            ],
            keyPoints: [
              'IPSec protocol suite (AH, ESP, IKE)',
              'IKE Phase 1 and Phase 2 negotiations',
              'Tunnel mode vs transport mode',
              'Encryption and authentication algorithms'
            ]
          },
          {
            id: 'site-to-site-vpn',
            title: 'Site-to-Site VPN Configuration',
            description: 'Configuring IPSec tunnels between sites',
            type: 'lab',
            xpReward: 200,
            isCompleted: false,
            pdfPages: [124, 125, 126, 127, 128],
            tips: [
              'Ensure both sides have matching IPSec parameters',
              'Configure appropriate firewall policies for VPN traffic',
              'Test connectivity after tunnel establishment'
            ],
            keyPoints: [
              'IPSec tunnel interface configuration',
              'Phase 1 and Phase 2 parameter matching',
              'Static routing over IPSec tunnels',
              'Redundant tunnel configuration'
            ]
          },
          {
            id: 'dynamic-vpn',
            title: 'Dynamic VPN Configuration',
            description: 'Hub-and-spoke and dynamic VPN topologies',
            type: 'reading',
            xpReward: 100,
            isCompleted: false,
            pdfPages: [129, 130, 131],
            tips: [
              'Use dynamic VPN for scalable remote site connectivity',
              'Configure proper authentication methods',
              'Plan IP addressing for dynamic peers'
            ],
            keyPoints: [
              'Dynamic VPN concepts and use cases',
              'Hub-and-spoke topology configuration',
              'Dynamic peer authentication',
              'Routing considerations for dynamic VPN'
            ]
          },
          {
            id: 'vpn-monitoring',
            title: 'VPN Monitoring and Troubleshooting',
            description: 'Monitoring VPN status and resolving issues',
            type: 'lab',
            xpReward: 100,
            isCompleted: false,
            pdfPages: [132, 133, 134],
            tips: [
              'Use VPN monitor to track tunnel status',
              'Enable debug logging for troubleshooting',
              'Monitor VPN performance and usage statistics'
            ],
            keyPoints: [
              'VPN status monitoring and alerts',
              'Debug commands for IPSec troubleshooting',
              'Performance monitoring and optimization',
              'Common VPN issues and resolutions'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'utm-features',
    title: 'UTM Features',
    description: 'Unified Threat Management security services',
    icon: '🛡️',
    difficulty: 'Advanced',
    estimatedTime: '12-15 hours',
    totalXP: 3000,
    chapters: [
      {
        id: 'antivirus',
        title: 'Antivirus',
        description: 'Antivirus scanning and malware protection',
        xpReward: 500,
        isUnlocked: false,
        isCompleted: false,
        checkpoints: [
          {
            id: 'av-fundamentals',
            title: 'Antivirus Fundamentals',
            description: 'Understanding FortiGate antivirus capabilities',
            type: 'reading',
            xpReward: 100,
            isCompleted: false,
            pdfPages: [135, 136, 137, 138],
            tips: [
              'Regular signature updates are critical for effectiveness',
              'Balance security scanning with network performance',
              'Understand different scanning modes and their impact'
            ],
            keyPoints: [
              'Signature-based vs heuristic detection',
              'Real-time scanning vs on-demand scanning',
              'Antivirus database updates and scheduling',
              'Performance impact of antivirus scanning'
            ]
          },
          {
            id: 'av-profiles',
            title: 'Antivirus Profile Configuration',
            description: 'Creating and managing antivirus profiles',
            type: 'lab',
            xpReward: 150,
            isCompleted: false,
            pdfPages: [139, 140, 141, 142],
            tips: [
              'Configure different profiles for different user groups',
              'Enable appropriate scanning options for your environment',
              'Test antivirus profiles with known test files'
            ],
            keyPoints: [
              'Antivirus profile creation and customization',
              'File type and size scanning limits',
              'Action configuration for detected threats',
              'Quarantine and logging settings'
            ]
          },
          {
            id: 'av-advanced',
            title: 'Advanced Antivirus Features',
            description: 'Advanced antivirus configuration and tuning',
            type: 'reading',
            xpReward: 150,
            isCompleted: false,
            pdfPages: [143, 144, 145],
            tips: [
              'Use FortiSandbox integration for advanced threat detection',
              'Configure outbreak prevention for zero-day threats',
              'Monitor antivirus statistics and adjust policies'
            ],
            keyPoints: [
              'FortiSandbox integration and configuration',
              'Outbreak prevention and zero-day protection',
              'Antivirus statistics and reporting',
              'Performance tuning and optimization'
            ]
          },
          {
            id: 'av-troubleshooting',
            title: 'Antivirus Troubleshooting',
            description: 'Diagnosing and resolving antivirus issues',
            type: 'lab',
            xpReward: 100,
            isCompleted: false,
            pdfPages: [146, 147],
            tips: [
              'Check antivirus database version and update status',
              'Review antivirus logs for scanning issues',
              'Test with EICAR test file for validation'
            ],
            keyPoints: [
              'Common antivirus scanning issues',
              'Database update troubleshooting',
              'Performance impact analysis',
              'Log analysis and interpretation'
            ]
          }
        ]
      },
      {
        id: 'web-filtering',
        title: 'Web Filtering',
        description: 'Web content filtering and URL blocking',
        xpReward: 600,
        isUnlocked: false,
        isCompleted: false,
        checkpoints: [
          {
            id: 'web-filter-basics',
            title: 'Web Filtering Fundamentals',
            description: 'Understanding web filtering concepts and methods',
            type: 'reading',
            xpReward: 100,
            isCompleted: false,
            pdfPages: [148, 149, 150, 151],
            tips: [
              'Understand different filtering methods and their use cases',
              'Plan web filtering policies based on user groups',
              'Consider performance impact of deep inspection'
            ],
            keyPoints: [
              'URL filtering vs content filtering',
              'Category-based filtering concepts',
              'FortiGuard Web Filtering service',
              'Local URL filtering and custom categories'
            ]
          },
          {
            id: 'web-filter-profiles',
            title: 'Web Filter Profile Configuration',
            description: 'Creating and managing web filtering profiles',
            type: 'lab',
            xpReward: 200,
            isCompleted: false,
            pdfPages: [152, 153, 154, 155, 156],
            tips: [
              'Create different profiles for different user groups',
              'Use time-based filtering for flexible policies',
              'Test web filtering with various websites'
            ],
            keyPoints: [
              'Web filter profile creation and customization',
              'Category-based blocking and allowing',
              'Custom URL lists and patterns',
              'Time-based filtering and scheduling'
            ]
          },
          {
            id: 'content-filtering',
            title: 'Content Filtering',
            description: 'Advanced content inspection and filtering',
            type: 'reading',
            xpReward: 150,
            isCompleted: false,
            pdfPages: [157, 158, 159],
            tips: [
              'Configure content filtering for sensitive data protection',
              'Use keyword filtering for specific content blocking',
              'Monitor content filtering logs for policy effectiveness'
            ],
            keyPoints: [
              'Content inspection and keyword filtering',
              'File type filtering and blocking',
              'Safe search enforcement',
              'Content filtering performance considerations'
            ]
          },
          {
            id: 'web-filter-reporting',
            title: 'Web Filtering Reporting',
            description: 'Monitoring and reporting web filtering activity',
            type: 'lab',
            xpReward: 150,
            isCompleted: false,
            pdfPages: [160, 161, 162],
            tips: [
              'Use web filtering reports to understand user behavior',
              'Set up alerts for policy violations',
              'Regular review of blocked and allowed sites'
            ],
            keyPoints: [
              'Web filtering logs and reports',
              'User activity monitoring',
              'Policy effectiveness analysis',
              'Compliance reporting and documentation'
            ]
          }
        ]
      },
      {
        id: 'application-control',
        title: 'Application Control',
        description: 'Application identification and control',
        xpReward: 600,
        isUnlocked: false,
        isCompleted: false,
        checkpoints: [
          {
            id: 'app-control-basics',
            title: 'Application Control Fundamentals',
            description: 'Understanding application identification and control',
            type: 'reading',
            xpReward: 100,
            isCompleted: false,
            pdfPages: [163, 164, 165, 166],
            tips: [
              'Understand how applications are identified',
              'Learn about application signatures and patterns',
              'Consider bandwidth and performance implications'
            ],
            keyPoints: [
              'Application identification methods',
              'Application signatures and database',
              'Deep packet inspection for applications',
              'Application risk and category classification'
            ]
          },
          {
            id: 'app-control-profiles',
            title: 'Application Control Profiles',
            description: 'Creating application control policies',
            type: 'lab',
            xpReward: 200,
            isCompleted: false,
            pdfPages: [167, 168, 169, 170, 171],
            tips: [
              'Start with monitoring mode before blocking',
              'Create policies based on business requirements',
              'Test application control with various applications'
            ],
            keyPoints: [
              'Application control profile configuration',
              'Application blocking and allowing rules',
              'Bandwidth limiting per application',
              'Application control actions and logging'
            ]
          },
          {
            id: 'app-shaping',
            title: 'Application Shaping',
            description: 'Bandwidth management and QoS for applications',
            type: 'reading',
            xpReward: 150,
            isCompleted: false,
            pdfPages: [172, 173, 174],
            tips: [
              'Prioritize business-critical applications',
              'Limit bandwidth for non-essential applications',
              'Monitor application bandwidth usage'
            ],
            keyPoints: [
              'Traffic shaping concepts and configuration',
              'Application-based QoS policies',
              'Bandwidth allocation and limits',
              'Traffic prioritization strategies'
            ]
          },
          {
            id: 'app-monitoring',
            title: 'Application Monitoring',
            description: 'Monitoring application usage and performance',
            type: 'lab',
            xpReward: 150,
            isCompleted: false,
            pdfPages: [175, 176, 177],
            tips: [
              'Use application reports to understand network usage',
              'Monitor for unauthorized applications',
              'Analyze application performance metrics'
            ],
            keyPoints: [
              'Application usage reporting and analytics',
              'Real-time application monitoring',
              'Performance impact analysis',
              'Application control policy optimization'
            ]
          }
        ]
      },
      {
        id: 'ips',
        title: 'Intrusion Prevention System (IPS)',
        description: 'Network intrusion detection and prevention',
        xpReward: 700,
        isUnlocked: false,
        isCompleted: false,
        checkpoints: [
          {
            id: 'ips-fundamentals',
            title: 'IPS Fundamentals',
            description: 'Understanding intrusion prevention concepts',
            type: 'reading',
            xpReward: 150,
            isCompleted: false,
            pdfPages: [178, 179, 180, 181, 182],
            tips: [
              'Understand the difference between IDS and IPS',
              'Learn about signature-based vs anomaly-based detection',
              'Consider the performance impact of IPS inspection'
            ],
            keyPoints: [
              'IPS vs IDS comparison and capabilities',
              'Signature-based detection methods',
              'Anomaly-based detection and behavioral analysis',
              'IPS deployment modes and considerations'
            ]
          },
          {
            id: 'ips-profiles',
            title: 'IPS Profile Configuration',
            description: 'Creating and managing IPS security profiles',
            type: 'lab',
            xpReward: 200,
            isCompleted: false,
            pdfPages: [183, 184, 185, 186, 187],
            tips: [
              'Start with recommended IPS signatures',
              'Customize profiles based on network environment',
              'Test IPS profiles to avoid false positives'
            ],
            keyPoints: [
              'IPS profile creation and customization',
              'Signature selection and filtering',
              'Action configuration for detected threats',
              'Exception handling and whitelisting'
            ]
          },
          {
            id: 'ips-signatures',
            title: 'IPS Signature Management',
            description: 'Managing and updating IPS signatures',
            type: 'reading',
            xpReward: 150,
            isCompleted: false,
            pdfPages: [188, 189, 190],
            tips: [
              'Keep IPS signatures updated regularly',
              'Understand signature severity levels',
              'Create custom signatures when needed'
            ],
            keyPoints: [
              'IPS signature database and updates',
              'Signature categories and severity levels',
              'Custom signature creation',
              'Signature performance optimization'
            ]
          },
          {
            id: 'ips-tuning',
            title: 'IPS Tuning and Optimization',
            description: 'Fine-tuning IPS for optimal performance',
            type: 'lab',
            xpReward: 200,
            isCompleted: false,
            pdfPages: [191, 192, 193, 194],
            tips: [
              'Monitor IPS performance and adjust as needed',
              'Fine-tune signatures to reduce false positives',
              'Use IPS statistics for optimization'
            ],
            keyPoints: [
              'IPS performance monitoring and tuning',
              'False positive reduction techniques',
              'IPS statistics and analysis',
              'Load balancing and scaling considerations'
            ]
          }
        ]
      },
      {
        id: 'data-loss-prevention',
        title: 'Data Loss Prevention (DLP)',
        description: 'Preventing sensitive data leakage',
        xpReward: 600,
        isUnlocked: false,
        isCompleted: false,
        checkpoints: [
          {
            id: 'dlp-fundamentals',
            title: 'DLP Fundamentals',
            description: 'Understanding data loss prevention concepts',
            type: 'reading',
            xpReward: 150,
            isCompleted: false,
            pdfPages: [195, 196, 197, 198],
            tips: [
              'Identify sensitive data types in your organization',
              'Understand different DLP detection methods',
              'Plan DLP policies based on compliance requirements'
            ],
            keyPoints: [
              'Data classification and sensitivity levels',
              'DLP detection methods and techniques',
              'Compliance requirements and regulations',
              'DLP deployment strategies'
            ]
          },
          {
            id: 'dlp-sensors',
            title: 'DLP Sensor Configuration',
            description: 'Configuring DLP sensors and detection rules',
            type: 'lab',
            xpReward: 200,
            isCompleted: false,
            pdfPages: [199, 200, 201, 202],
            tips: [
              'Configure sensors for different data types',
              'Test DLP sensors with sample data',
              'Fine-tune sensitivity to avoid false positives'
            ],
            keyPoints: [
              'DLP sensor types and configuration',
              'Pattern matching and regular expressions',
              'File fingerprinting and watermarking',
              'Sensor testing and validation'
            ]
          },
          {
            id: 'dlp-policies',
            title: 'DLP Policy Implementation',
            description: 'Creating comprehensive DLP policies',
            type: 'lab',
            xpReward: 150,
            isCompleted: false,
            pdfPages: [203, 204, 205],
            tips: [
              'Start with monitoring mode before enforcement',
              'Create policies for different user groups',
              'Document DLP policy decisions and exceptions'
            ],
            keyPoints: [
              'DLP policy creation and management',
              'Action configuration for policy violations',
              'User notification and education',
              'DLP policy testing and deployment'
            ]
          },
          {
            id: 'dlp-reporting',
            title: 'DLP Monitoring and Reporting',
            description: 'Monitoring DLP effectiveness and compliance',
            type: 'reading',
            xpReward: 100,
            isCompleted: false,
            pdfPages: [206, 207, 208],
            tips: [
              'Regular review of DLP incidents and trends',
              'Use DLP reports for compliance documentation',
              'Adjust policies based on monitoring results'
            ],
            keyPoints: [
              'DLP incident monitoring and analysis',
              'Compliance reporting and documentation',
              'DLP policy effectiveness measurement',
              'Continuous improvement processes'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'monitoring-logging',
    title: 'Monitoring and Logging',
    description: 'System monitoring, logging, and troubleshooting',
    icon: '📊',
    difficulty: 'Intermediate',
    estimatedTime: '6-8 hours',
    totalXP: 1600,
    chapters: [
      {
        id: 'log-management',
        title: 'Log Management',
        description: 'Configuring and managing system logs',
        xpReward: 400,
        isUnlocked: false,
        isCompleted: false,
        checkpoints: [
          {
            id: 'log-basics',
            title: 'Logging Fundamentals',
            description: 'Understanding FortiGate logging capabilities',
            type: 'reading',
            xpReward: 100,
            isCompleted: false,
            pdfPages: [209, 210, 211, 212],
            tips: [
              'Understand different log types and their purposes',
              'Plan log storage and retention policies',
              'Configure appropriate log levels for your needs'
            ],
            keyPoints: [
              'Log types: traffic, event, system, security',
              'Log levels and severity classification',
              'Local vs remote logging options',
              'Log storage and retention considerations'
            ]
          },
          {
            id: 'log-configuration',
            title: 'Log Configuration',
            description: 'Setting up logging destinations and formats',
            type: 'lab',
            xpReward: 150,
            isCompleted: false,
            pdfPages: [213, 214, 215, 216],
            tips: [
              'Configure multiple log destinations for redundancy',
              'Use appropriate log formats for your SIEM',
              'Test log delivery to ensure reliability'
            ],
            keyPoints: [
              'Syslog server configuration',
              'Log format options and customization',
              'Log filtering and selective logging',
              'Log encryption and secure transmission'
            ]
          },
          {
            id: 'log-analysis',
            title: 'Log Analysis and Interpretation',
            description: 'Understanding and analyzing FortiGate logs',
            type: 'reading',
            xpReward: 100,
            isCompleted: false,
            pdfPages: [217, 218, 219],
            tips: [
              'Learn to read and interpret log entries',
              'Use log analysis tools effectively',
              'Correlate logs for security incident investigation'
            ],
            keyPoints: [
              'Log entry structure and fields',
              'Common log patterns and meanings',
              'Log correlation and analysis techniques',
              'Security incident investigation using logs'
            ]
          },
          {
            id: 'log-troubleshooting',
            title: 'Log Troubleshooting',
            description: 'Resolving logging issues and problems',
            type: 'lab',
            xpReward: 50,
            isCompleted: false,
            pdfPages: [220, 221],
            tips: [
              'Check log server connectivity and configuration',
              'Verify log format compatibility',
              'Monitor log storage space and rotation'
            ],
            keyPoints: [
              'Common logging issues and solutions',
              'Log delivery troubleshooting',
              'Performance impact of logging',
              'Log storage management'
            ]
          }
        ]
      },
      {
        id: 'snmp-monitoring',
        title: 'SNMP Monitoring',
        description: 'SNMP configuration for network monitoring',
        xpReward: 400,
        isUnlocked: false,
        isCompleted: false,
        checkpoints: [
          {
            id: 'snmp-basics',
            title: 'SNMP Fundamentals',
            description: 'Understanding SNMP concepts and versions',
            type: 'reading',
            xpReward: 100,
            isCompleted: false,
            pdfPages: [222, 223, 224],
            tips: [
              'Understand SNMP versions and security implications',
              'Learn about MIBs and OIDs for FortiGate',
              'Plan SNMP community strings and access control'
            ],
            keyPoints: [
              'SNMP versions (v1, v2c, v3) and differences',
              'SNMP community strings and security',
              'MIB (Management Information Base) concepts',
              'SNMP operations: GET, SET, TRAP'
            ]
          },
          {
            id: 'snmp-configuration',
            title: 'SNMP Configuration',
            description: 'Configuring SNMP on FortiGate devices',
            type: 'lab',
            xpReward: 150,
            isCompleted: false,
            pdfPages: [225, 226, 227, 228],
            tips: [
              'Use SNMPv3 for secure monitoring when possible',
              'Configure appropriate access restrictions',
              'Test SNMP connectivity with monitoring tools'
            ],
            keyPoints: [
              'SNMP agent configuration on FortiGate',
              'Community string and user configuration',
              'SNMP access control and restrictions',
              'SNMP trap configuration and destinations'
            ]
          },
          {
            id: 'snmp-monitoring-setup',
            title: 'SNMP Monitoring Setup',
            description: 'Integrating FortiGate with monitoring systems',
            type: 'lab',
            xpReward: 100,
            isCompleted: false,
            pdfPages: [229, 230, 231],
            tips: [
              'Configure monitoring system with FortiGate MIBs',
              'Set up appropriate monitoring thresholds',
              'Test SNMP monitoring and alerting'
            ],
            keyPoints: [
              'Integration with network monitoring systems',
              'FortiGate-specific MIB objects',
              'Monitoring thresholds and alerting',
              'Performance monitoring via SNMP'
            ]
          },
          {
            id: 'snmp-troubleshooting',
            title: 'SNMP Troubleshooting',
            description: 'Diagnosing and resolving SNMP issues',
            type: 'reading',
            xpReward: 50,
            isCompleted: false,
            pdfPages: [232, 233],
            tips: [
              'Use SNMP tools to test connectivity',
              'Check SNMP access permissions and restrictions',
              'Verify MIB compatibility with monitoring systems'
            ],
            keyPoints: [
              'Common SNMP connectivity issues',
              'SNMP authentication and authorization problems',
              'MIB loading and compatibility issues',
              'SNMP performance troubleshooting'
            ]
          }
        ]
      },
      {
        id: 'performance-monitoring',
        title: 'Performance Monitoring',
        description: 'Monitoring system and network performance',
        xpReward: 400,
        isUnlocked: false,
        isCompleted: false,
        checkpoints: [
          {
            id: 'performance-basics',
            title: 'Performance Monitoring Fundamentals',
            description: 'Understanding performance metrics and monitoring',
            type: 'reading',
            xpReward: 100,
            isCompleted: false,
            pdfPages: [234, 235, 236],
            tips: [
              'Identify key performance indicators for your environment',
              'Establish baseline performance metrics',
              'Monitor both system and network performance'
            ],
            keyPoints: [
              'Key performance metrics and indicators',
              'System resource monitoring (CPU, memory, disk)',
              'Network performance metrics',
              'Performance baseline establishment'
            ]
          },
          {
            id: 'dashboard-setup',
            title: 'Dashboard and Widget Configuration',
            description: 'Setting up monitoring dashboards',
            type: 'lab',
            xpReward: 150,
            isCompleted: false,
            pdfPages: [237, 238, 239, 240],
            tips: [
              'Customize dashboards for different user roles',
              'Use widgets to display relevant metrics',
              'Set up real-time monitoring views'
            ],
            keyPoints: [
              'Dashboard customization and layout',
              'Widget types and configuration options',
              'Real-time vs historical data display',
              'Dashboard sharing and access control'
            ]
          },
          {
            id: 'alerting-setup',
            title: 'Alerting and Notifications',
            description: 'Configuring performance alerts and notifications',
            type: 'lab',
            xpReward: 100,
            isCompleted: false,
            pdfPages: [241, 242, 243],
            tips: [
              'Set appropriate alert thresholds to avoid false alarms',
              'Configure multiple notification methods',
              'Test alerting mechanisms regularly'
            ],
            keyPoints: [
              'Alert threshold configuration',
              'Notification methods (email, SNMP, syslog)',
              'Alert escalation and acknowledgment',
              'Alert correlation and suppression'
            ]
          },
          {
            id: 'performance-optimization',
            title: 'Performance Optimization',
            description: 'Optimizing FortiGate performance based on monitoring',
            type: 'reading',
            xpReward: 50,
            isCompleted: false,
            pdfPages: [244, 245],
            tips: [
              'Use monitoring data to identify bottlenecks',
              'Optimize policies and configurations for performance',
              'Regular performance review and tuning'
            ],
            keyPoints: [
              'Performance bottleneck identification',
              'Configuration optimization techniques',
              'Capacity planning based on monitoring data',
              'Performance tuning best practices'
            ]
          }
        ]
      },
      {
        id: 'troubleshooting',
        title: 'Troubleshooting',
        description: 'Systematic troubleshooting methodologies',
        xpReward: 400,
        isUnlocked: false,
        isCompleted: false,
        checkpoints: [
          {
            id: 'troubleshooting-methodology',
            title: 'Troubleshooting Methodology',
            description: 'Systematic approach to problem resolution',
            type: 'reading',
            xpReward: 100,
            isCompleted: false,
            pdfPages: [246, 247, 248],
            tips: [
              'Follow a systematic troubleshooting approach',
              'Document issues and solutions for future reference',
              'Use appropriate tools for each type of problem'
            ],
            keyPoints: [
              'Structured troubleshooting methodology',
              'Problem identification and isolation',
              'Root cause analysis techniques',
              'Solution implementation and verification'
            ]
          },
          {
            id: 'diagnostic-tools',
            title: 'Diagnostic Tools and Commands',
            description: 'Using FortiGate diagnostic tools effectively',
            type: 'lab',
            xpReward: 150,
            isCompleted: false,
            pdfPages: [249, 250, 251, 252, 253],
            tips: [
              'Learn key diagnostic commands for different issues',
              'Use packet capture for network troubleshooting',
              'Understand debug output and interpretation'
            ],
            keyPoints: [
              'CLI diagnostic commands and usage',
              'Packet capture and analysis tools',
              'Debug commands and output interpretation',
              'System status and health checks'
            ]
          },
          {
            id: 'common-issues',
            title: 'Common Issues and Solutions',
            description: 'Identifying and resolving common FortiGate issues',
            type: 'reading',
            xpReward: 100,
            isCompleted: false,
            pdfPages: [254, 255, 256, 257],
            tips: [
              'Learn common issue patterns and symptoms',
              'Build a knowledge base of solutions',
              'Know when to escalate to technical support'
            ],
            keyPoints: [
              'Common connectivity issues',
              'Performance-related problems',
              'Configuration errors and fixes',
              'Hardware and software issues'
            ]
          },
          {
            id: 'advanced-troubleshooting',
            title: 'Advanced Troubleshooting Techniques',
            description: 'Advanced diagnostic and resolution methods',
            type: 'lab',
            xpReward: 50,
            isCompleted: false,
            pdfPages: [258, 259, 260],
            tips: [
              'Use advanced debug options carefully',
              'Correlate multiple data sources for complex issues',
              'Document complex troubleshooting procedures'
            ],
            keyPoints: [
              'Advanced debug and diagnostic techniques',
              'Multi-layer troubleshooting approaches',
              'Integration with external tools',
              'Escalation procedures and support resources'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'high-availability',
    title: 'High Availability',
    description: 'Implementing redundancy and failover solutions',
    icon: '🔄',
    difficulty: 'Advanced',
    estimatedTime: '8-10 hours',
    totalXP: 2400,
    chapters: [
      {
        id: 'ha-fundamentals',
        title: 'HA Fundamentals',
        description: 'Understanding high availability concepts',
        xpReward: 600,
        isUnlocked: false,
        isCompleted: false,
        checkpoints: [
          {
            id: 'ha-concepts',
            title: 'High Availability Concepts',
            description: 'Understanding HA principles and benefits',
            type: 'reading',
            xpReward: 150,
            isCompleted: false,
            pdfPages: [261, 262, 263, 264],
            tips: [
              'Understand different HA modes and their use cases',
              'Plan HA deployment based on business requirements',
              'Consider network topology for HA implementation'
            ],
            keyPoints: [
              'HA benefits and business justification',
              'Active-Passive vs Active-Active modes',
              'HA cluster formation and management',
              'Failover mechanisms and timing'
            ]
          },
          {
            id: 'ha-modes',
            title: 'HA Operating Modes',
            description: 'Different HA modes and their characteristics',
            type: 'reading',
            xpReward: 150,
            isCompleted: false,
            pdfPages: [265, 266, 267, 268],
            tips: [
              'Choose the right HA mode for your requirements',
              'Understand the implications of each mode',
              'Consider licensing requirements for HA'
            ],
            keyPoints: [
              'Active-Passive (A-P) mode operation',
              'Active-Active (A-A) mode operation',
              'HA mode selection criteria',
              'Mode-specific configuration requirements'
            ]
          },
          {
            id: 'ha-requirements',
            title: 'HA Requirements and Planning',
            description: 'Planning and requirements for HA deployment',
            type: 'reading',
            xpReward: 150,
            isCompleted: false,
            pdfPages: [269, 270, 271],
            tips: [
              'Ensure identical hardware for HA cluster members',
              'Plan network connectivity for HA links',
              'Consider physical placement and power requirements'
            ],
            keyPoints: [
              'Hardware requirements and compatibility',
              'Network connectivity requirements',
              'Licensing considerations for HA',
              'Physical deployment planning'
            ]
          },
          {
            id: 'ha-fundamentals-quiz',
            title: 'HA Fundamentals Quiz',
            description: 'Test your understanding of HA concepts',
            type: 'quiz',
            xpReward: 150,
            isCompleted: false,
            pdfPages: [261, 271],
            tips: [
              'Review HA modes and their characteristics',
              'Understand HA requirements and planning considerations'
            ],
            keyPoints: [],
            quiz: [
              {
                id: 'q10',
                question: 'What is the main difference between Active-Passive and Active-Active HA modes?',
                options: [
                  'Hardware requirements',
                  'Traffic processing capability',
                  'Configuration complexity',
                  'Licensing costs'
                ],
                correctAnswer: 1,
                explanation: 'In Active-Passive mode, only one unit processes traffic while the other is standby. In Active-Active mode, both units can process traffic simultaneously.'
              },
              {
                id: 'q11',
                question: 'What is required for FortiGate HA cluster formation?',
                options: [
                  'Different hardware models',
                  'Identical hardware and firmware',
                  'Special HA licenses',
                  'External load balancer'
                ],
                correctAnswer: 1,
                explanation: 'HA cluster members must have identical hardware models and run the same firmware version for proper operation.'
              }
            ]
          }
        ]
      },
      {
        id: 'ha-configuration',
        title: 'HA Configuration',
        description: 'Configuring and managing HA clusters',
        xpReward: 800,
        isUnlocked: false,
        isCompleted: false,
        checkpoints: [
          {
            id: 'ha-setup',
            title: 'HA Cluster Setup',
            description: 'Step-by-step HA cluster configuration',
            type: 'lab',
            xpReward: 200,
            isCompleted: false,
            pdfPages: [272, 273, 274, 275, 276],
            tips: [
              'Configure HA on both units before connecting HA cables',
              'Use unique group names and passwords',
              'Verify HA status after configuration'
            ],
            keyPoints: [
              'HA group configuration and settings',
              'HA heartbeat and data synchronization',
              'Priority and preemption settings',
              'HA interface configuration'
            ]
          },
          {
            id: 'ha-synchronization',
            title: 'Configuration Synchronization',
            description: 'Managing configuration sync in HA clusters',
            type: 'reading',
            xpReward: 150,
            isCompleted: false,
            pdfPages: [277, 278, 279],
            tips: [
              'Understand what configurations are synchronized',
              'Monitor synchronization status regularly',
              'Handle synchronization conflicts properly'
            ],
            keyPoints: [
              'Automatic configuration synchronization',
              'Synchronization scope and limitations',
              'Manual synchronization procedures',
              'Conflict resolution mechanisms'
            ]
          },
          {
            id: 'ha-monitoring',
            title: 'HA Monitoring and Management',
            description: 'Monitoring HA cluster health and status',
            type: 'lab',
            xpReward: 200,
            isCompleted: false,
            pdfPages: [280, 281, 282, 283],
            tips: [
              'Monitor HA status and health regularly',
              'Set up alerting for HA events',
              'Understand HA status indicators'
            ],
            keyPoints: [
              'HA status monitoring and dashboards',
              'HA event logging and alerting',
              'Cluster member health checks',
              'HA performance monitoring'
            ]
          },
          {
            id: 'ha-failover-testing',
            title: 'Failover Testing and Validation',
            description: 'Testing HA failover mechanisms',
            type: 'lab',
            xpReward: 250,
            isCompleted: false,
            pdfPages: [284, 285, 286],
            tips: [
              'Test failover scenarios regularly',
              'Document failover times and procedures',
              'Validate application continuity during failover'
            ],
            keyPoints: [
              'Planned failover testing procedures',
              'Failover time measurement and optimization',
              'Application impact assessment',
              'Failback procedures and validation'
            ]
          }
        ]
      },
      {
        id: 'ha-troubleshooting',
        title: 'HA Troubleshooting',
        description: 'Diagnosing and resolving HA issues',
        xpReward: 600,
        isUnlocked: false,
        isCompleted: false,
        checkpoints: [
          {
            id: 'ha-common-issues',
            title: 'Common HA Issues',
            description: 'Identifying and resolving common HA problems',
            type: 'reading',
            xpReward: 150,
            isCompleted: false,
            pdfPages: [287, 288, 289, 290],
            tips: [
              'Learn to identify split-brain scenarios',
              'Understand synchronization failures',
              'Know how to recover from HA failures'
            ],
            keyPoints: [
              'Split-brain scenarios and prevention',
              'Synchronization failures and recovery',
              'HA link failures and redundancy',
              'Cluster member replacement procedures'
            ]
          },
          {
            id: 'ha-diagnostic-tools',
            title: 'HA Diagnostic Tools',
            description: 'Using diagnostic tools for HA troubleshooting',
            type: 'lab',
            xpReward: 200,
            isCompleted: false,
            pdfPages: [291, 292, 293],
            tips: [
              'Use HA-specific diagnostic commands',
              'Monitor HA heartbeat and communication',
              'Analyze HA logs for troubleshooting'
            ],
            keyPoints: [
              'HA diagnostic CLI commands',
              'HA log analysis and interpretation',
              'Network connectivity testing for HA',
              'Performance impact analysis'
            ]
          },
          {
            id: 'ha-recovery-procedures',
            title: 'HA Recovery Procedures',
            description: 'Recovering from HA failures and disasters',
            type: 'lab',
            xpReward: 150,
            isCompleted: false,
            pdfPages: [294, 295, 296],
            tips: [
              'Document recovery procedures in advance',
              'Practice recovery scenarios regularly',
              'Maintain spare hardware for quick replacement'
            ],
            keyPoints: [
              'Disaster recovery planning for HA',
              'Cluster member replacement procedures',
              'Configuration backup and restore in HA',
              'Emergency procedures and contacts'
            ]
          },
          {
            id: 'ha-best-practices',
            title: 'HA Best Practices',
            description: 'Best practices for HA deployment and management',
            type: 'reading',
            xpReward: 100,
            isCompleted: false,
            pdfPages: [297, 298, 299],
            tips: [
              'Follow vendor recommendations for HA deployment',
              'Regular maintenance and health checks',
              'Documentation and change management'
            ],
            keyPoints: [
              'HA deployment best practices',
              'Maintenance and operational procedures',
              'Change management in HA environments',
              'Performance optimization for HA'
            ]
          }
        ]
      },
      {
        id: 'ha-advanced',
        title: 'Advanced HA Topics',
        description: 'Advanced HA configurations and scenarios',
        xpReward: 400,
        isUnlocked: false,
        isCompleted: false,
        checkpoints: [
          {
            id: 'ha-load-balancing',
            title: 'HA Load Balancing',
            description: 'Load balancing in Active-Active HA mode',
            type: 'reading',
            xpReward: 100,
            isCompleted: false,
            pdfPages: [300, 301, 302],
            tips: [
              'Understand load balancing algorithms',
              'Configure appropriate load distribution',
              'Monitor load balancing effectiveness'
            ],
            keyPoints: [
              'Load balancing methods in A-A mode',
              'Session distribution and affinity',
              'Load balancing optimization',
              'Monitoring and adjustment'
            ]
          },
          {
            id: 'ha-virtual-clustering',
            title: 'Virtual Clustering',
            description: 'Advanced virtual clustering configurations',
            type: 'reading',
            xpReward: 150,
            isCompleted: false,
            pdfPages: [303, 304, 305],
            tips: [
              'Understand virtual clustering benefits',
              'Plan virtual cluster deployment',
              'Consider scalability implications'
            ],
            keyPoints: [
              'Virtual clustering concepts and benefits',
              'Virtual cluster configuration',
              'Scalability and performance considerations',
              'Management and monitoring'
            ]
          },
          {
            id: 'ha-integration',
            title: 'HA Integration with Other Systems',
            description: 'Integrating HA with network infrastructure',
            type: 'lab',
            xpReward: 150,
            isCompleted: false,
            pdfPages: [306, 307, 308],
            tips: [
              'Coordinate HA with network redundancy',
              'Integrate with monitoring systems',
              'Consider upstream and downstream dependencies'
            ],
            keyPoints: [
              'Integration with network redundancy protocols',
              'Monitoring system integration',
              'Dependency management',
              'End-to-end redundancy planning'
            ]
          }
        ]
      }
    ]
  }
];