import { GlassWater, Wine, Beer, Martini, Clock } from 'lucide-react';

const drinksData = [
    {
        category: "Wine",
        items: [
            { name: "House Chardonnay", price: "7.00/glass | 24.00/bottle", description: "Crisp and refreshing with notes of green apple and citrus." },
            { name: "House Cabernet Sauvignon", price: "7.00/glass | 24.00/bottle", description: "Full-bodied with dark fruit flavors and a smooth finish." },
            { name: "Pinot Grigio", price: "8.50/glass | 30.00/bottle", description: "Light and airy with floral aromas and pear notes." },
            { name: "Merlot", price: "8.50/glass | 30.00/bottle", description: "Soft and approachable with black cherry and plum notes." },
            { name: "Sauvignon Blanc", price: "9.00/glass | 32.00/bottle", description: "Zesty acidity with tropical fruit and herbaceous notes." }
        ]
    },
    {
        category: "Beer & Craft Taps",
        items: [
            { name: "Bud Light", price: "5.00", description: "Classic American light lager." },
            { name: "Miller Lite", price: "5.00", description: "Traditional light pilsner." },
            { name: "Local Craft IPA", price: "7.50", description: "Rotating selection from local breweries. Ask your server for current offerings." },
            { name: "Seasonal Draft", price: "7.00", description: "Rotating seasonal selection. Ask your server for current offerings." },
            { name: "Guinness", price: "8.00", description: "Rich and creamy Irish dry stout." },
            { name: "Stella Artois", price: "7.00", description: "Premium European lager." }
        ],
        note: "Ask your server about our 12 rotating craft taps!"
    },
    {
        category: "Cocktails",
        items: [
            { name: "Crabby Margarita", price: "11.00", description: "Our signature blend of tequila, fresh lime juice, and agave nectar with a salty rim." },
            { name: "Old Fashioned", price: "12.00", description: "Bourbon, sugar, bitters, and a twist of citrus." },
            { name: "Espresso Martini", price: "13.00", description: "Vodka, fresh espresso, and coffee liqueur." },
            { name: "Nautical Mule", price: "11.00", description: "Vodka, fresh lime, and spicy ginger beer served in a copper mug." },
            { name: "Blueberry Lemonade", price: "10.00", description: "Blueberry vodka, fresh lemonade, and a splash of club soda." }
        ]
    },
    {
        category: "Non-Alcoholics",
        items: [
            { name: "Fresh Lemonade", price: "3.50", description: "House-made with real lemons." },
            { name: "Iced Tea", price: "3.00", description: "Freshly brewed black tea." },
            { name: "Craft Root Beer", price: "4.50", description: "Bottled locally." },
            { name: "Sparkling Water", price: "4.00", description: "Refreshing carbonated mineral water." },
            { name: "Assorted Sodas", price: "3.00", description: "Coke, Diet Coke, Sprite, Ginger Ale." }
        ]
    }
];

export default function DrinksPage() {
    return (
        <div className="section" style={{ minHeight: '100vh', background: 'var(--background)', paddingTop: '4rem' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <img src="/logo_with_text.png" alt="Crabby Al's Logo" style={{ height: '180px', width: 'auto', marginBottom: '1.5rem' }} />
                    <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 8vw, 4.5rem)', marginBottom: '1.5rem' }}>Drinks Menu</h1>

                    <div style={{
                        fontSize: '1.2rem',
                        color: 'var(--primary)',
                        fontWeight: '600',
                        marginTop: '-1rem',
                        marginBottom: '2rem',
                        fontStyle: 'italic',
                        opacity: 0.9,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.25rem'
                    }}>
                        <div>Bar Hours</div>
                        <div>Sunday–Thursday: 11am–1am</div>
                        <div>Friday–Saturday: 11am–2am</div>
                    </div>
                </div>

                {drinksData.map((section, idx) => (
                    <div key={idx} style={{ marginBottom: '5rem' }}>
                        <div style={{
                            textAlign: 'center',
                            marginBottom: '3rem',
                            position: 'relative'
                        }}>
                            <h2 style={{
                                fontFamily: 'var(--font-serif)',
                                fontSize: '2.5rem',
                                color: 'var(--primary)',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                display: 'inline-block',
                                background: 'var(--background)',
                                padding: '0 1.5rem',
                                position: 'relative',
                                zIndex: 1
                            }}>
                                {section.category}
                            </h2>
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: 0,
                                right: 0,
                                height: '1px',
                                background: 'rgba(0,0,0,0.1)',
                                zIndex: 0
                            }}></div>
                            {section.note && (
                                <p style={{
                                    fontStyle: 'italic',
                                    opacity: 0.7,
                                    marginTop: '0.5rem',
                                    fontSize: '0.9rem'
                                }}>
                                    {section.note}
                                </p>
                            )}
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                            gap: '2.5rem 4rem'
                        }}>
                            {section.items.map((item, iidx) => (
                                <div key={iidx} style={{ borderBottom: '1px dashed rgba(0,0,0,0.1)', paddingBottom: '1rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1rem', marginBottom: '0.25rem' }}>
                                        <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '700', letterSpacing: '0.5px' }}>{item.name}</h3>
                                        <div style={{ fontWeight: 'bold', color: 'var(--accent)', fontSize: '1.1rem', whiteSpace: 'nowrap' }}>
                                            {item.price}
                                        </div>
                                    </div>
                                    {item.description && <p style={{ opacity: 0.8, fontSize: '0.9rem', margin: 0 }}>{item.description}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <div style={{
                    marginTop: '6rem',
                    padding: '4rem 2rem',
                    background: 'var(--primary)',
                    color: 'white',
                    borderRadius: '16px',
                    textAlign: 'center',
                    boxShadow: '0 20px 40px rgba(10, 61, 98, 0.2)',
                    marginBottom: '4rem'
                }}>
                    <h2 style={{ color: 'white', fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '1rem' }}>Sip, Relax, Repeat.</h2>
                    <p style={{ opacity: 0.9, maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Join us for Happy Hour or enjoy a drink by the water. Our selection of craft cocktails and local brews is always rotating.
                    </p>
                </div>
            </div>
        </div>
    );
}
