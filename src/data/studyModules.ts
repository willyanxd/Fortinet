import { StudyModule } from '../types';

export const studyModules: StudyModule[] = [
  {
    id: 'fundamentals',
    title: 'FortiGate Fundamentals',
    description: 'Master the basics of FortiGate administration and security concepts',
    icon: '🛡️',
    difficulty: 'Beginner',
    estimatedTime: '8-10 hours',
    totalXP: 1500,
    chapters: [
      {
        id: 'intro',
        title: 'Introduction to FortiGate',
        description: 'Understanding FortiGate architecture and basic concepts',
        xpReward: 200,
        isUnlocked: true,
        isCompleted: false,
        checkpoints: [
          {
            id: 'intro-1',
            title: 'FortiGate Overview',
            description: 'Learn about FortiGate hardware and software components',
            type: 'reading',
            xpReward: 50,
            isCompleted: false,
            tips: [
              'FortiGate combines firewall, VPN, and UTM features in one device',
              'Understanding the FortiOS operating system is crucial',
              'Pay attention to different FortiGate models and their capabilities'
            ],
            keyPoints: [
              'FortiGate is a next-generation firewall (NGFW)',
              'FortiOS provides the operating system',
              'Integrated security features include IPS, AV, Web Filtering',
              'Supports both hardware and virtual deployments'
            ]
          },
          {
            id: 'intro-2',
            title: 'Initial Setup Quiz',
            description: 'Test your knowledge of FortiGate basics',
            type: 'quiz',
            xpReward: 100,
            isCompleted: false,
            tips: [
              'Review the FortiGate architecture before taking the quiz',
              'Focus on understanding the difference between hardware and VM models'
            ],
            keyPoints: [],
            quiz: [
              {
                id: 'q1',
                question: 'What operating system does FortiGate use?',
                options: ['FortiOS', 'Linux', 'Windows', 'BSD'],
                correctAnswer: 0,
                explanation: 'FortiGate devices run on FortiOS, which is Fortinet\'s proprietary operating system.'
              },
              {
                id: 'q2',
                question: 'Which of the following is NOT a typical FortiGate feature?',
                options: ['Firewall', 'Antivirus', 'Email Server', 'VPN'],
                correctAnswer: 2,
                explanation: 'FortiGate is a security appliance that includes firewall, antivirus, and VPN capabilities, but not email server functionality.'
              }
            ]
          },
          {
            id: 'intro-3',
            title: 'Lab: First Login',
            description: 'Practice logging into FortiGate for the first time',
            type: 'lab',
            xpReward: 50,
            isCompleted: false,
            tips: [
              'Default admin username is "admin" with no password',
              'Always change the default password immediately',
              'Use HTTPS for secure web management'
            ],
            keyPoints: [
              'Default management IP is usually 192.168.1.99',
              'Web GUI is accessible via HTTPS',
              'CLI access available via SSH or console'
            ]
          }
        ]
      },
      {
        id: 'interfaces',
        title: 'Interface Configuration',
        description: 'Configure and manage FortiGate network interfaces',
        xpReward: 300,
        isUnlocked: false,
        isCompleted: false,
        checkpoints: [
          {
            id: 'int-1',
            title: 'Interface Types and Modes',
            description: 'Understanding different interface types and operational modes',
            type: 'reading',
            xpReward: 75,
            isCompleted: false,
            tips: [
              'Physical interfaces can be configured in different modes',
              'VLAN interfaces extend network segmentation',
              'Loopback interfaces are useful for management'
            ],
            keyPoints: [
              'Physical interfaces: port1, port2, etc.',
              'VLAN interfaces for network segmentation',
              'Aggregate interfaces for link redundancy',
              'Loopback interfaces for management'
            ]
          },
          {
            id: 'int-2',
            title: 'Interface Configuration Lab',
            description: 'Hands-on practice configuring interfaces',
            type: 'lab',
            xpReward: 125,
            isCompleted: false,
            tips: [
              'Always verify connectivity after configuration changes',
              'Use ping tests to validate interface configuration',
              'Document your interface assignments'
            ],
            keyPoints: [
              'Configure IP addresses and subnet masks',
              'Set administrative access permissions',
              'Enable/disable interfaces as needed'
            ]
          },
          {
            id: 'int-3',
            title: 'Interface Configuration Quiz',
            description: 'Test your interface configuration knowledge',
            type: 'quiz',
            xpReward: 100,
            isCompleted: false,
            tips: [
              'Review interface types before taking the quiz',
              'Understand the difference between physical and logical interfaces'
            ],
            keyPoints: [],
            quiz: [
              {
                id: 'q3',
                question: 'What is the purpose of a VLAN interface?',
                options: ['Physical connectivity', 'Network segmentation', 'Power management', 'Backup connectivity'],
                correctAnswer: 1,
                explanation: 'VLAN interfaces are used for network segmentation, allowing you to create separate broadcast domains.'
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
    description: 'Create and manage comprehensive security policies',
    icon: '🔒',
    difficulty: 'Intermediate',
    estimatedTime: '12-15 hours',
    totalXP: 2500,
    chapters: [
      {
        id: 'firewall-policies',
        title: 'Firewall Policies',
        description: 'Understanding and configuring firewall policies',
        xpReward: 400,
        isUnlocked: false,
        isCompleted: false,
        checkpoints: [
          {
            id: 'fw-1',
            title: 'Policy Fundamentals',
            description: 'Learn the basics of firewall policy creation',
            type: 'reading',
            xpReward: 100,
            isCompleted: false,
            tips: [
              'Policies are processed from top to bottom',
              'First matching policy determines the action',
              'Always include logging for troubleshooting'
            ],
            keyPoints: [
              'Source and destination zones',
              'Source and destination addresses',
              'Services and applications',
              'Action: Accept, Deny, or Reject'
            ]
          },
          {
            id: 'fw-2',
            title: 'Advanced Policy Features',
            description: 'Explore advanced policy configuration options',
            type: 'reading',
            xpReward: 150,
            isCompleted: false,
            tips: [
              'UTM profiles enhance security policies',
              'Schedule objects control when policies are active',
              'Policy consolidation improves performance'
            ],
            keyPoints: [
              'UTM profile integration',
              'Schedule-based policies',
              'Policy consolidation techniques',
              'Performance optimization'
            ]
          },
          {
            id: 'fw-3',
            title: 'Policy Configuration Lab',
            description: 'Hands-on practice creating security policies',
            type: 'lab',
            xpReward: 150,
            isCompleted: false,
            tips: [
              'Test policies thoroughly before deployment',
              'Use policy simulation tools when available',
              'Document policy purposes and requirements'
            ],
            keyPoints: [
              'Create basic allow/deny policies',
              'Configure UTM profiles',
              'Test policy effectiveness'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'utm-features',
    title: 'UTM Features',
    description: 'Master Unified Threat Management capabilities',
    icon: '🛡️',
    difficulty: 'Advanced',
    estimatedTime: '15-20 hours',
    totalXP: 3500,
    chapters: [
      {
        id: 'antivirus',
        title: 'Antivirus Protection',
        description: 'Configure and manage antivirus scanning',
        xpReward: 500,
        isUnlocked: false,
        isCompleted: false,
        checkpoints: [
          {
            id: 'av-1',
            title: 'Antivirus Fundamentals',
            description: 'Understanding FortiGate antivirus capabilities',
            type: 'reading',
            xpReward: 125,
            isCompleted: false,
            tips: [
              'Regular signature updates are critical',
              'Balance security with performance',
              'Configure appropriate scan modes'
            ],
            keyPoints: [
              'Signature-based detection',
              'Heuristic analysis',
              'Cloud-based scanning',
              'Performance considerations'
            ]
          }
        ]
      }
    ]
  }
];