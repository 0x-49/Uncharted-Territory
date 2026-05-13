export const metadata = {
  title: 'Trading Glossary: 40+ Essential Terms Explained | Uncharted Territory',
  description:
    'A comprehensive A-Z trading glossary covering basic, technical, options, and community terms. Definitions written for active traders, from beginner to advanced.',
  alternates: {
    canonical: 'https://unchartedterritory.com/glossary',
  },
  openGraph: {
    title: 'Trading Glossary: 40+ Essential Terms Explained | Uncharted Territory',
    description:
      'Comprehensive A-Z glossary of trading terms, technical analysis, options, risk management, and more. Learn the language of professional trading.',
    url: 'https://unchartedterritory.com/glossary',
    siteName: 'Uncharted Territory',
    type: 'website',
  },
}

const glossaryTerms = [
  // A
  {
    letter: 'A',
    term: 'After-Hours Trading',
    definition:
      'Trading that occurs after the official market close at 4:00 PM ET, typically running until 8:00 PM ET. After-hours markets have lower liquidity and wider spreads than regular session trading, and often host significant price moves around earnings releases.',
    note: true,
  },
  {
    letter: 'A',
    term: 'Alert',
    definition:
      'A real-time notification posted by a trader or community indicating a trade entry, exit, or setup worth watching. In quality communities like Uncharted Territory, every alert includes entry price, stop level, target, and the reasoning behind the trade.',
  },
  // B
  {
    letter: 'B',
    term: 'Bear Market',
    definition:
      'A market condition in which prices are falling or expected to fall by 20% or more from recent highs, sustained over at least two months. Associated with widespread pessimism, economic contraction, and risk-off investor behavior.',
  },
  {
    letter: 'B',
    term: 'Bid/Ask Spread',
    definition:
      'The difference between the highest price a buyer is willing to pay (bid) and the lowest price a seller will accept (ask). A tight spread indicates high liquidity; a wide spread means lower liquidity and higher implicit transaction cost.',
  },
  {
    letter: 'B',
    term: 'Bollinger Bands',
    definition:
      'A technical indicator consisting of a moving average and two standard deviation bands above and below it. When price approaches the upper band, a stock may be overbought; approaching the lower band may signal oversold conditions. Bands also contract and expand with volatility.',
    note: true,
  },
  {
    letter: 'B',
    term: 'Breakout',
    definition:
      'A price move above a defined resistance level or below a support level, typically on above-average volume, signaling the potential start of a new trend direction. Breakouts are high-conviction trade setups when accompanied by volume confirmation.',
    note: true,
  },
  {
    letter: 'B',
    term: 'Bull Market',
    definition:
      'A market condition characterized by rising prices over a sustained period, typically defined as a 20% or more rise from recent lows. Bull markets are associated with economic growth, strong corporate earnings, and investor optimism.',
  },
  // C
  {
    letter: 'C',
    term: 'Call Option',
    definition:
      'A financial contract giving the buyer the right, but not the obligation, to purchase 100 shares of an underlying stock at a specified strike price before the expiration date. Calls profit when the underlying stock rises above the strike price.',
    note: true,
  },
  {
    letter: 'C',
    term: 'Candlestick',
    definition:
      'A chart representation of price movement for a given time period, showing open, high, low, and close prices. The body represents the open-to-close range; the wicks show the high and low extremes. Candlestick patterns (doji, hammer, engulfing) are foundational technical analysis tools.',
    note: true,
  },
  {
    letter: 'C',
    term: 'Catalyst',
    definition:
      'A specific event or news item expected to drive a significant price move in a stock. Common catalysts include earnings reports, FDA approvals, analyst upgrades, merger announcements, and major product launches.',
  },
  {
    letter: 'C',
    term: 'Consolidation',
    definition:
      'A period of sideways price action after a significant move, where a stock trades within a narrow range. Consolidation often precedes another significant move, in the direction of the prior trend (continuation) or a reversal.',
    note: true,
  },
  {
    letter: 'C',
    term: 'Conviction',
    definition:
      'The strength of a trader\'s belief in a setup based on the quality of the technical structure, catalyst, and risk/reward. High-conviction trades receive larger position sizes; low-conviction setups get smaller size or are skipped entirely.',
  },
  // D
  {
    letter: 'D',
    term: 'Day Trading',
    definition:
      'A trading style in which all positions are opened and closed within the same market session, with no overnight holdings. Day traders profit from intraday price movements. In the US, frequent day trading requires a minimum account balance of $25,000 under the Pattern Day Trader (PDT) rule.',
    note: true,
  },
  {
    letter: 'D',
    term: 'Delta',
    definition:
      'An options Greek measuring how much an option\'s price changes per $1 move in the underlying stock. A delta of 0.50 means the option gains or loses $0.50 for every $1 move in the stock. Delta ranges from 0 to 1 for calls and 0 to -1 for puts.',
  },
  // E
  {
    letter: 'E',
    term: 'Earnings Play',
    definition:
      'A trade structured specifically around a company\'s earnings announcement, which can cause significant price moves. Earnings plays can be directional (betting on a move up or down) or volatility-based (using options to profit from a large move in either direction).',
    note: true,
  },
  {
    letter: 'E',
    term: 'Expiration (Options)',
    definition:
      'The date on which an options contract expires and becomes worthless if not exercised or sold. Options lose time value (theta) as expiration approaches, accelerating in the final 30 days. Trading options close to expiration is high-risk, high-reward.',
  },
  // F
  {
    letter: 'F',
    term: 'Float',
    definition:
      'The number of shares available for public trading, excluding restricted shares held by insiders and major institutional holders. Low-float stocks (under 10 million shares) tend to be more volatile because a small amount of buying or selling activity moves the price significantly.',
    note: true,
  },
  // G
  {
    letter: 'G',
    term: 'Gap Up / Gap Down',
    definition:
      'A gap occurs when a stock opens significantly higher (gap up) or lower (gap down) than its previous close, leaving a visible gap on the price chart. Gaps are typically caused by after-hours news, earnings, or significant macro events. They are among the most important pre-market setups traders analyze.',
    note: true,
  },
  // I
  {
    letter: 'I',
    term: 'Implied Volatility (IV)',
    definition:
      'A forward-looking measure of the expected magnitude of a stock\'s price movement, derived from options pricing. High IV means options are expensive (the market expects a large move). Low IV means cheaper options (the market expects relatively stable price action). IV spikes around earnings and major events.',
    note: true,
  },
  // L
  {
    letter: 'L',
    term: 'Long Position',
    definition:
      'A trade where a trader buys a security expecting the price to rise. Going long is the standard bullish position. A long stock position profits when the stock price increases above the purchase price.',
  },
  // M
  {
    letter: 'M',
    term: 'MACD',
    definition:
      'Moving Average Convergence Divergence, a momentum indicator showing the relationship between two exponential moving averages (typically 12-day and 26-day EMA). The MACD line crossing above the signal line is bullish; crossing below is bearish. The histogram shows the magnitude of the divergence.',
    note: true,
  },
  {
    letter: 'M',
    term: 'Market Cap',
    definition:
      'Total market capitalization, calculated as share price multiplied by total shares outstanding. Market cap categorizes stocks as micro-cap (under $300M), small-cap ($300M–$2B), mid-cap ($2B–$10B), large-cap ($10B–$200B), and mega-cap ($200B+). Each category has distinct risk and volatility characteristics.',
  },
  {
    letter: 'M',
    term: 'Moving Average',
    definition:
      'A technical indicator calculating the average price of a security over a specified number of periods, plotted as a line on the chart. Common periods: 20-day (short-term), 50-day (medium-term), 200-day (long-term). Moving averages smooth price data and identify trend direction and dynamic support/resistance levels.',
    note: true,
  },
  // O
  {
    letter: 'O',
    term: 'OHLC',
    definition:
      'Open, High, Low, Close, the four price points that define a period\'s price action. Used in bar charts and candlestick charts. The relationship between these four values contains significant information about the balance of buying and selling pressure during that period.',
  },
  {
    letter: 'O',
    term: 'Options Flow',
    definition:
      'Real-time tracking of unusual options activity, large or unusual orders suggesting institutional traders may have conviction on a directional move. Significant call buying above the ask price ("sweeps") can indicate bullish positioning; large put volume can signal hedging or bearish bets.',
    note: true,
  },
  {
    letter: 'O',
    term: 'Overtrading',
    definition:
      'Taking too many trades, often out of boredom, FOMO, or a desire to recoup losses. Overtrading dilutes a trader\'s edge, increases transaction costs, and typically results in worse performance than trading fewer, higher-conviction setups.',
  },
  // P
  {
    letter: 'P',
    term: 'Pattern Day Trader (PDT) Rule',
    definition:
      'A FINRA regulation requiring US brokerage accounts that execute four or more day trades within five business days to maintain a minimum equity of $25,000. Accounts falling below this threshold are restricted to three day trades per rolling five-day period.',
  },
  {
    letter: 'P',
    term: 'Position Size',
    definition:
      'The number of shares or contracts held in a single trade. Professional traders calculate position size based on account size, risk tolerance (typically 1-2% of capital per trade), and the distance to the stop loss. Proper position sizing is the mechanical implementation of risk management.',
    note: true,
  },
  {
    letter: 'P',
    term: 'Position Trading',
    definition:
      'A trading style involving holding positions for weeks to months, focusing on longer-term fundamental and technical trends. Position traders experience fewer transactions than swing or day traders but require more patience and tolerance for extended drawdown periods.',
  },
  {
    letter: 'P',
    term: 'Pre-Market Trading',
    definition:
      'Trading activity that occurs before the official market open at 9:30 AM ET, typically running from 4:00 AM to 9:30 AM ET. Pre-market price action reflects overnight news, earnings reactions, and futures activity. The most liquid pre-market window is 7:00–9:30 AM ET.',
    note: true,
  },
  {
    letter: 'P',
    term: 'Pullback',
    definition:
      'A temporary price decline within an overall uptrend, representing a partial retracement from a recent high before the trend resumes. Pullbacks to key support levels (moving averages, prior resistance-turned-support) are among the highest probability entry setups in trending markets.',
    note: true,
  },
  {
    letter: 'P',
    term: 'Put Option',
    definition:
      'A financial contract giving the buyer the right, but not the obligation, to sell 100 shares of an underlying stock at a specified strike price before the expiration date. Puts profit when the underlying stock falls below the strike price. Used both for directional bearish trades and as portfolio hedges.',
    note: true,
  },
  // R
  {
    letter: 'R',
    term: 'Resistance',
    definition:
      'A price level where selling pressure has historically exceeded buying pressure, causing price advances to stall or reverse. Once a resistance level is broken with volume, it often becomes support on subsequent pullbacks.',
    note: true,
  },
  {
    letter: 'R',
    term: 'Risk/Reward Ratio (R:R)',
    definition:
      'The ratio of potential profit to potential loss on a trade. A 1:2 R:R means risking $1 to make $2. Professional traders typically require at least a 1:1.5 or 1:2 R:R before taking a trade. At a 50% win rate, a 1:2 R:R generates net profitability over a large sample of trades.',
    note: true,
  },
  {
    letter: 'R',
    term: 'RSI (Relative Strength Index)',
    definition:
      'A momentum oscillator ranging from 0 to 100, measuring the speed and magnitude of recent price changes. Readings above 70 are typically considered overbought; readings below 30 are oversold. RSI divergence, where price makes a new high but RSI does not, can signal trend exhaustion.',
    note: true,
  },
  // S
  {
    letter: 'S',
    term: 'Scalping',
    definition:
      'A trading style involving very short holding periods, seconds to minutes, targeting tiny price increments with high trade frequency. Scalpers typically use level 2 quotes, time and sales data, and require extremely fast execution platforms. It is one of the most demanding and technically challenging trading styles.',
  },
  {
    letter: 'S',
    term: 'Setup',
    definition:
      'A specific configuration of price action, technical indicators, and/or fundamental catalysts that meets a trader\'s criteria for a potential trade. A setup is not a trade, it is the prerequisite that must be present before a trader will consider entering a position.',
  },
  {
    letter: 'S',
    term: 'Short Selling',
    definition:
      'Borrowing shares from a broker and selling them, expecting the price to fall, then buying them back at a lower price to return to the broker and pocket the difference. Short selling has theoretically unlimited risk if the stock rises indefinitely, making risk management critical.',
    note: true,
  },
  {
    letter: 'S',
    term: 'Signal',
    definition:
      'A trade recommendation or trigger, either generated by a trader, algorithm, or indicator, indicating when to enter or exit a position. Quality signals in community settings include entry, stop, target, and reasoning. Signals without reasoning create dependency and do not build trading skill.',
  },
  {
    letter: 'S',
    term: 'Stop Loss',
    definition:
      'A pre-determined price level at which a trader exits a losing trade to limit further losses. Stop losses convert "how wrong am I willing to be?" into a specific mechanical action. The most important rule: once set, a stop loss should never be moved further away from entry to "give more room."',
    note: true,
  },
  {
    letter: 'S',
    term: 'Strike Price',
    definition:
      'The fixed price at which an options contract holder can buy (call) or sell (put) the underlying stock. For a call option to have intrinsic value at expiration, the stock price must be above the strike price. For a put, the stock price must be below the strike price.',
  },
  {
    letter: 'S',
    term: 'Support',
    definition:
      'A price level where buying interest has historically been strong enough to halt or reverse downward price movement. Stocks tend to "bounce" at support levels as buyers step in. When support breaks, the prior support level often becomes new resistance.',
    note: true,
  },
  {
    letter: 'S',
    term: 'Swing Trading',
    definition:
      'A trading style in which positions are held for multiple days to several weeks, capturing price swings within a broader trend. Swing trading is more compatible with a full-time job than day trading and is not subject to the PDT $25,000 minimum for US traders.',
    note: true,
  },
  // T
  {
    letter: 'T',
    term: 'Take Profit',
    definition:
      'A pre-set price level at which a trader exits a winning trade to lock in gains. Setting a take profit target before entry is as important as setting a stop loss, it prevents the psychological error of holding winners past their logical exit point out of greed.',
  },
  {
    letter: 'T',
    term: 'Thesis',
    definition:
      'The complete rationale for a trade, the catalyst, technical setup, entry reasoning, stop logic, and expected outcome. A well-formed thesis transforms a vague directional bet into a structured trade with defined criteria for success and failure.',
  },
  {
    letter: 'T',
    term: 'Trend Line',
    definition:
      'A straight line connecting two or more price points that defines the direction of a trend. An uptrend line connects successive higher lows; a downtrend line connects successive lower highs. A clean break of a trend line with volume is often the first signal of a potential trend change.',
    note: true,
  },
  // V
  {
    letter: 'V',
    term: 'Volume',
    definition:
      'The total number of shares traded in a security during a specific time period. Volume is the single most important confirmation indicator in technical analysis. A price breakout on high volume is far more reliable than one on thin volume. Unusual volume, significantly above the average, often precedes major price moves.',
    note: true,
  },
  // W
  {
    letter: 'W',
    term: 'Watchlist',
    definition:
      'A curated list of stocks a trader is monitoring for potential trade setups. A quality watchlist is built pre-market with specific entry triggers, stop levels, and catalysts defined for each name. It transforms market open from an information-overload event into a structured execution of a pre-made plan.',
    note: true,
  },
]

// Group terms by letter
function groupByLetter(terms) {
  const grouped = {}
  for (const term of terms) {
    if (!grouped[term.letter]) grouped[term.letter] = []
    grouped[term.letter].push(term)
  }
  return grouped
}

const uniqueLetters = [...new Set(glossaryTerms.map((t) => t.letter))].sort()
const grouped = groupByLetter(glossaryTerms)

export default function GlossaryPage() {
  return (
    <div
      style={{
        background: '#0a0b0e',
        minHeight: '100vh',
        color: '#c4c8d8',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Hero */}
      <section
        style={{
          borderBottom: '1px solid rgba(196,200,216,0.08)',
          padding: '80px 24px 48px',
          textAlign: 'center',
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(245,158,11,0.08) 0%, transparent 65%)',
        }}
      >
        <p
          style={{
            fontSize: '12px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#f59e0b',
            marginBottom: '16px',
            fontWeight: 600,
          }}
        >
          Reference Guide
        </p>
        <h1
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontFamily: "'Bebas Neue', sans-serif",
            letterSpacing: '2px',
            color: '#f8f9fc',
            marginBottom: '20px',
            lineHeight: 1.1,
          }}
        >
          Trading Glossary
        </h1>
        <p
          style={{
            fontSize: '1.125rem',
            color: '#8b90a0',
            maxWidth: '600px',
            margin: '0 auto 32px',
            lineHeight: 1.7,
          }}
        >
          40+ essential trading terms explained clearly, from basic market concepts to advanced
          options and community language. Learn the vocabulary of professional traders.
        </p>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(245,158,11,0.1)',
            border: '1px solid rgba(245,158,11,0.25)',
            borderRadius: '8px',
            padding: '8px 16px',
          }}
        >
          <span style={{ color: '#f59e0b', fontSize: '14px' }}>
            {glossaryTerms.length} terms &bull; A-Z alphabetical &bull; Updated 2026
          </span>
        </div>
      </section>

      {/* Sticky Alphabet Nav */}
      <nav
        aria-label="Glossary alphabet navigation"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'rgba(10,11,14,0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(196,200,216,0.08)',
          padding: '12px 24px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '4px',
        }}
      >
        {uniqueLetters.map((letter) => (
          <a
            key={letter}
            href={`#letter-${letter}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '6px',
              fontSize: '13px',
              fontWeight: 700,
              color: '#f59e0b',
              background: 'rgba(245,158,11,0.08)',
              border: '1px solid rgba(245,158,11,0.15)',
              textDecoration: 'none',
              transition: 'all 0.2s',
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: '1px',
            }}
          >
            {letter}
          </a>
        ))}
      </nav>

      {/* Category Key */}
      <section
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '32px 24px 0',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '8px',
          }}
        >
          {[
            { label: 'Basic / Market', color: '#60a5fa' },
            { label: 'Technical Analysis', color: '#34d399' },
            { label: 'Trading Styles & Orders', color: '#a78bfa' },
            { label: 'Options', color: '#f97316' },
            { label: 'Community & Strategy', color: '#f59e0b' },
          ].map((cat) => (
            <span
              key={cat.label}
              style={{
                fontSize: '12px',
                color: cat.color,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: cat.color,
                  display: 'inline-block',
                }}
              />
              {cat.label}
            </span>
          ))}
        </div>
      </section>

      {/* Glossary Content */}
      <main
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '32px 24px 80px',
        }}
      >
        {uniqueLetters.map((letter) => (
          <section key={letter} id={`letter-${letter}`} style={{ marginBottom: '48px' }}>
            {/* Letter Heading */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '24px',
                paddingBottom: '12px',
                borderBottom: '1px solid rgba(245,158,11,0.2)',
              }}
            >
              <span
                style={{
                  fontSize: '3rem',
                  fontFamily: "'Bebas Neue', sans-serif",
                  color: '#f59e0b',
                  lineHeight: 1,
                  minWidth: '48px',
                }}
              >
                {letter}
              </span>
              <div
                style={{
                  flex: 1,
                  height: '1px',
                  background: 'linear-gradient(to right, rgba(245,158,11,0.3), transparent)',
                }}
              />
            </div>

            {/* Terms in this letter */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {grouped[letter].map((item) => (
                <article
                  key={item.term}
                  style={{
                    background: 'rgba(28,31,46,0.5)',
                    border: '1px solid rgba(196,200,216,0.08)',
                    borderRadius: '12px',
                    padding: '20px 24px',
                    transition: 'border-color 0.2s',
                  }}
                >
                  <h2
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: '#f8f9fc',
                      marginBottom: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      flexWrap: 'wrap',
                    }}
                  >
                    <strong>{item.term}</strong>
                  </h2>
                  <p
                    style={{
                      fontSize: '0.95rem',
                      lineHeight: 1.75,
                      color: '#9ca3af',
                      margin: 0,
                    }}
                  >
                    {item.definition}
                  </p>
                  {item.note && (
                    <p
                      style={{
                        fontSize: '0.8rem',
                        color: '#f59e0b',
                        marginTop: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        opacity: 0.85,
                      }}
                    >
                      <span
                        style={{
                          width: '14px',
                          height: '14px',
                          borderRadius: '50%',
                          background: 'rgba(245,158,11,0.15)',
                          border: '1px solid rgba(245,158,11,0.4)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '9px',
                          flexShrink: 0,
                        }}
                      >
                        ★
                      </span>
                      Covered in Uncharted Territory&apos;s live sessions and nightly workshops
                    </p>
                  )}
                </article>
              ))}
            </div>
          </section>
        ))}

        {/* Divider */}
        <div
          style={{
            height: '1px',
            background: 'rgba(196,200,216,0.08)',
            margin: '48px 0',
          }}
        />

        {/* CTA Section */}
        <section
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(245,158,11,0.12) 0%, rgba(28,31,46,0.8) 60%)',
            border: '1px solid rgba(245,158,11,0.2)',
            borderRadius: '16px',
            padding: '48px 32px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: '11px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#f59e0b',
              marginBottom: '16px',
              fontWeight: 600,
            }}
          >
            Put the Terms Into Practice
          </p>
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: '2px',
              color: '#f8f9fc',
              marginBottom: '16px',
              lineHeight: 1.15,
            }}
          >
            Learn These Concepts Live, Every Day
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: '#8b90a0',
              maxWidth: '560px',
              margin: '0 auto 32px',
              lineHeight: 1.7,
            }}
          >
            Reading definitions is just the starting point. In{' '}
            <strong style={{ color: '#c4c8d8' }}>Uncharted Territory</strong>, you watch 6 expert
            traders apply these concepts live in the market, every day. Support levels, breakouts,
            R:R ratios, options flow, it all becomes second nature when you see it in action.
          </p>

          {/* Stats row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '32px',
              marginBottom: '32px',
            }}
          >
            {[
              { value: 'active', label: 'Active Members' },
              { value: '5.0/5', label: '162 Verified Reviews' },
              { value: '50+', label: 'Live Sessions / Month' },
              { value: '$79.99', label: 'Per 28 Days' },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: '1.5rem',
                    fontFamily: "'Bebas Neue', sans-serif",
                    color: '#f59e0b',
                    letterSpacing: '1px',
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '2px' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Feature list */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '36px',
            }}
          >
            {[
              'Daily 7:30 AM ET pre-market Zoom',
              '6 expert traders (day + swing + options)',
              'Deepvue AI free for 1 month ($150 value)',
              '7-day money-back guarantee',
            ].map((feature) => (
              <span
                key={feature}
                style={{
                  fontSize: '13px',
                  color: '#9ca3af',
                  background: 'rgba(28,31,46,0.8)',
                  border: '1px solid rgba(196,200,216,0.1)',
                  borderRadius: '20px',
                  padding: '6px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span style={{ color: '#f59e0b' }}>✓</span>
                {feature}
              </span>
            ))}
          </div>

          <a
            href="https://whop.com/uncharted/uncharted?a=digitalartlab"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              color: '#0a0b0e',
              fontWeight: 700,
              fontSize: '1rem',
              padding: '16px 40px',
              borderRadius: '8px',
              textDecoration: 'none',
              letterSpacing: '0.5px',
              boxShadow: '0 0 30px rgba(245,158,11,0.25)',
              transition: 'all 0.3s ease',
            }}
          >
            Join Uncharted Territory →
          </a>
          <p
            style={{
              fontSize: '12px',
              color: '#6b7280',
              marginTop: '12px',
            }}
          >
            $79.99 per 28 days &bull; Cancel anytime &bull; 7-day money-back guarantee
          </p>
        </section>
      </main>
    </div>
  )
}
