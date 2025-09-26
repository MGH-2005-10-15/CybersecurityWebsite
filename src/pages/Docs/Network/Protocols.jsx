import styles from './Protocols.module.css'



export default function Protocols({theme}){

    return(
        <>
        <main className={styles['main']} data-theme={theme ? 'dark':'light'}>
            <div className={styles['content-header']}>
                <h1>Network Security Fundamentals</h1>
                <div className={styles['meta-info']}>
                    <span>Updated: 3 days ago</span>
                    <span>•</span>
                    <span>15 min read</span>
                    <span>•</span>
                    <span>Beginner</span>
                </div>
            </div>
                <section id="overview" className={styles['section']}>
                    <h2>Overview</h2>
                        <p>
                            Network security is a critical aspect of cybersecurity that focuses on protecting networks and data from unauthorized access, misuse, and threats. 
                            This guide covers the fundamental concepts, tools, and best practices for securing network infrastructure.
                        </p>
                </section>
                <section id="fundamentals" className={styles['section']}>
                    <h2>Network Security Fundamentals</h2>
                    <p>
                        Network security involves multiple layers of defense to protect the integrity, confidentiality, and accessibility of computer networks and data. 
                        Key components include:
                    </p>
                    <ul>
                        <li><strong>Access Control:</strong> Ensuring only authorized users can access network resources</li>
                        <li><strong>Firewalls:</strong> Filtering traffic based on security rules</li>
                        <li><strong>Intrusion Detection/Prevention Systems:</strong> Monitoring network traffic for suspicious activity</li>
                        <li><strong>Virtual Private Networks (VPNs):</strong> Creating secure connections over public networks</li>
                        <li><strong>Network Segmentation:</strong> Dividing networks into smaller segments to limit breach impact</li>
                    </ul>
                </section>
                <section id="threats" className={styles['section']}>
                    <h2>Common Network Threats</h2>
                    <p>
                        Understanding common network threats is essential for implementing effective security measures:
                    </p>
                    <ul>
                        <li><strong>Malware:</strong> Malicious software designed to damage or gain unauthorized access to systems</li>
                        <li><strong>Phishing Attacks:</strong> Deceptive attempts to obtain sensitive information</li>
                        <li><strong>Man-in-the-Middle (MitM) Attacks:</strong> Intercepting communication between two parties</li>
                        <li><strong>Denial-of-Service (DoS) Attacks:</strong> Overwhelming systems with traffic to disrupt services</li>
                        <li><strong>SQL Injection:</strong> Inserting malicious code into SQL queries</li>
                    </ul>
                </section>
                <section id="firewalls" className={styles['section']}>
                    <h2>Firewalls</h2>
                    <p>
                        Firewalls act as a barrier between trusted internal networks and untrusted external networks, such as the internet. 
                        They monitor and control incoming and outgoing network traffic based on predetermined security rules.
                    </p>
                    <h3 id="firewall-types">Types of Firewalls</h3>
                    <ul>
                        <li><strong>Packet-Filtering Firewalls:</strong> Examine packets and block or allow them based on source/destination IP, port, and protocol</li>
                        <li><strong>Stateful Inspection Firewalls:</strong> Track active connections and make decisions based on context</li>
                        <li><strong>Proxy Firewalls:</strong> Act as intermediaries between internal and external systems</li>
                        <li><strong>Next-Generation Firewalls (NGFW):</strong> Combine traditional firewall features with additional security functionalities</li>
                    </ul>
                    <h3 id="firewall-config">Firewall Configuration</h3>
                        <p>
                            Proper firewall configuration is crucial for effective network security. Basic configuration steps include:
                        </p>
                        <div className={styles['code-block']}>
                            <div className={styles['code-header']}>
                                <span>Firewall Configuration Example</span>
                                    <button 
                                    className={styles['copy-button']}>
                                        Copy
                                    </button>
                            </div>
                            <pre>
                                <code>
{`# Allow established connections
iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT

# Allow SSH from specific IP
iptables -A INPUT -p tcp --dport 22 -s 192.168.1.100 -j ACCEPT

# Allow HTTP and HTTPS
iptables -A INPUT -p tcp --dport 80 -j ACCEPT
iptables -A INPUT -p tcp --dport 443 -j ACCEPT

# Drop all other incoming traffic
iptables -A INPUT -j DROP`}
</code>
                            </pre>
                        </div>
                </section>
                <section id="ids" className={styles['section']}>
                    <h2>Intrusion Detection Systems (IDS)</h2>
                        <p>
                            Intrusion Detection Systems monitor network traffic for suspicious activity and known threats, 
                            sending alerts when potential security breaches are detected.
                        </p>
                    <h3 id="ids-types">Types of IDS</h3>
                        <ul>
                            <li><strong>Network-based IDS (NIDS):</strong> Monitors entire networks for malicious activity</li>
                            <li><strong>Host-based IDS (HIDS):</strong> Monitors individual devices or systems</li>
                            <li><strong>Signature-based IDS:</strong> Detects known patterns of malicious activity</li>
                            <li><strong>Anomaly-based IDS:</strong> Identifies deviations from normal network behavior</li>
                        </ul>
                </section>
                <section id="vpn" className={styles['section']}>
                    <h2>Virtual Private Networks (VPNs)</h2>
                        <p>
                            VPNs create secure connections over less secure networks, such as the internet. 
                            They encrypt traffic and provide anonymity, making them essential for remote work and secure communications.
                        </p>
                        <h3 id="vpn-types">VPN Protocols</h3>
                        <ul>
                            <li><strong>IPSec (Internet Protocol Security):</strong> A framework for secure IP communication</li>
                            <li><strong>SSL/TLS:</strong> Often used in remote access VPNs</li>
                            <li><strong>OpenVPN:</strong> An open-source VPN protocol known for its security and flexibility</li>
                            <li><strong>WireGuard:</strong> A modern, simple, and fast VPN protocol</li>
                        </ul>
                </section>
                <section id="best-practices" className={styles['section']}>
                    <h2>Best Practices</h2>
                        <p>
                            Implementing these best practices can significantly enhance network security:
                        </p>
                        <ul>
                            <li>Regularly update and patch all network devices and software</li>
                            <li>Implement strong password policies and multi-factor authentication</li>
                            <li>Segment networks to limit lateral movement in case of a breach</li>
                            <li>Conduct regular security audits and vulnerability assessments</li>
                            <li>Monitor network traffic for unusual patterns</li>
                            <li>Implement a defense-in-depth strategy with multiple security layers</li>
                            <li>Provide regular security awareness training for all users</li>
                        </ul>
                </section>
            <div className={styles['content-footer']}>
                <div className={styles['feedback-section']}>
                    <h3>Was this article helpful?</h3>
                        <div className={styles['feedback-buttons']}>
                            <button>👍 Yes</button>
                            <button>👎 No</button>
                        </div>
                </div>
            </div>
        </main>
        </>
    );



}