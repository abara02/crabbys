import { MapPin, Phone, Mail, Send, Anchor } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="section" style={{ minHeight: '100vh', background: 'var(--background)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <img src="/logo.png" alt="Crabby Al's Logo" style={{ height: '80px', width: 'auto', marginBottom: '1rem' }} />
                    <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3.5rem', marginBottom: '1rem' }}>Contact Us</h1>
                    <p style={{ opacity: 0.8, fontSize: '1.2rem' }}>We'd love to hear from you. Drop by or send us a message.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                    {/* Contact Details */}
                    <div>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '2rem' }}>Get In Touch</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{ background: 'var(--white)', padding: '1rem', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                                    <MapPin color="var(--accent)" size={24} />
                                </div>
                                <div>
                                    <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Location</h3>
                                    <p style={{ opacity: 0.8, margin: 0 }}>157 East Main Street</p>
                                    <p style={{ opacity: 0.8, margin: 0 }}>Thomaston, CT 06787</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{ background: 'var(--white)', padding: '1rem', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                                    <Phone color="var(--accent)" size={24} />
                                </div>
                                <div>
                                    <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Phone</h3>
                                    <p style={{ opacity: 0.8, margin: 0 }}>(860) 283-4177</p>
                                    <p style={{ fontSize: '0.85rem', opacity: 0.7, margin: 0, fontStyle: 'italic' }}>Please call for reservations</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{ background: 'var(--white)', padding: '1rem', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                                    <Mail color="var(--accent)" size={24} />
                                </div>
                                <div>
                                    <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Email</h3>
                                    <p style={{ opacity: 0.8 }}>info@crabbyals.com</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '4rem' }}>
                            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '1.5rem' }}>Location Map</h2>
                            <div style={{
                                width: '100%',
                                height: '350px',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                border: '1px solid rgba(0,0,0,0.1)'
                            }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2983.336465476313!2d-73.078426023385!3d41.670068971265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7eb5a5a5a5a5b%3A0x5a5a5a5a5a5a5a5a!2s157%20E%20Main%20St%2C%20Thomaston%2C%20CT%2006787%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div style={{ background: 'var(--white)', padding: '3rem', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '2rem' }}>Send a Message</h2>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 'bold', opacity: 0.8 }}>Full Name</label>
                                <input type="text" placeholder="Your Name" style={{ padding: '1rem', borderRadius: '4px', border: '1px solid #ddd', fontSize: '1rem' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 'bold', opacity: 0.8 }}>Email Address</label>
                                <input type="email" placeholder="example@mail.com" style={{ padding: '1rem', borderRadius: '4px', border: '1px solid #ddd', fontSize: '1rem' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 'bold', opacity: 0.8 }}>Subject</label>
                                <select style={{ padding: '1rem', borderRadius: '4px', border: '1px solid #ddd', fontSize: '1rem' }}>
                                    <option>General Inquiry</option>
                                    <option>Private Event Inquiry</option>
                                    <option>Catering Question</option>
                                    <option>Feedback</option>
                                </select>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 'bold', opacity: 0.8 }}>Message</label>
                                <textarea rows={5} placeholder="How can we help you?" style={{ padding: '1rem', borderRadius: '4px', border: '1px solid #ddd', fontSize: '1rem', resize: 'vertical' }}></textarea>
                            </div>
                            <button type="submit" className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', padding: '1.25rem' }}>
                                <Send size={18} />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
