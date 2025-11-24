import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'PitchGenie - #1 AI Outreach Tool'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'black',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    position: 'relative',
                }}
            >
                {/* Background Gradients */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-20%',
                        left: '-10%',
                        width: '600px',
                        height: '600px',
                        background: 'rgba(16, 185, 129, 0.2)', // emerald-500
                        borderRadius: '50%',
                        filter: 'blur(100px)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-20%',
                        right: '-10%',
                        width: '600px',
                        height: '600px',
                        background: 'rgba(245, 158, 11, 0.2)', // amber-500
                        borderRadius: '50%',
                        filter: 'blur(100px)',
                    }}
                />

                {/* Content */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        marginBottom: '40px',
                        zIndex: 10,
                    }}
                >
                    <div
                        style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '16px',
                            background: 'linear-gradient(135deg, #10b981, #f59e0b)', // emerald to amber
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '32px',
                            fontWeight: 'bold',
                            color: 'white',
                        }}
                    >
                        P
                    </div>
                    <div style={{ fontSize: '48px', fontWeight: 'bold', color: 'white' }}>
                        PitchGenie
                    </div>
                </div>

                <div
                    style={{
                        fontSize: '72px',
                        fontWeight: 'bold',
                        color: 'white',
                        textAlign: 'center',
                        lineHeight: 1.1,
                        marginBottom: '24px',
                        zIndex: 10,
                        maxWidth: '900px',
                    }}
                >
                    The AI Outreach Tool That Actually Gets Replies
                </div>

                <div
                    style={{
                        fontSize: '32px',
                        color: 'rgba(255, 255, 255, 0.6)',
                        textAlign: 'center',
                        zIndex: 10,
                    }}
                >
                    Automate Cold Email & LinkedIn • 3x More Meetings
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
