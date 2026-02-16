import { useState } from 'react'
import { 
  Copy, Check, Gamepad2, Smartphone, 
  Users, Trophy, Shield, Heart, Zap, Star,
  Crown, Gem, Sparkles, Flame, Pickaxe
} from 'lucide-react'
import { toast } from 'sonner'
import './App.css'

const ranks = [
  {
    name: 'VIP',
    price: 'Rp10.000',
    color: '#22C55E',
    icon: Star,
    limit: '10.000',
    sethome: '5x',
    features: ['/clan create', '/repair', '/feed', '/heal', '/kit vip'],
    money: 'Rp50.000'
  },
  {
    name: 'MVP',
    price: 'Rp25.000',
    color: '#3B82F6',
    icon: Trophy,
    limit: '20.000',
    sethome: '10x',
    features: ['/ec', '/feed', '/nick', '/kit mvp', '+ Fitur VIP'],
    money: 'Rp150.000'
  },
  {
    name: 'ELITE',
    price: 'Rp50.000',
    color: '#F59E0B',
    icon: Shield,
    limit: '35.000',
    sethome: '15x',
    features: ['/ec', '/fly', '/nick', '/repair', '/feed', '/kit elite', '+ Fitur MVP'],
    money: 'Rp350.000'
  },
  {
    name: 'LEGEND',
    price: 'Rp80.000',
    color: '#A855F7',
    icon: Crown,
    limit: '50.000',
    sethome: '25x',
    features: ['/ec', '/fly', '/nick', '/repair', '/kit legend', '+ Fitur ELITE'],
    money: 'Rp500.000'
  },
  {
    name: 'SULTAN',
    price: 'Rp100.000',
    color: '#EAB308',
    icon: Gem,
    limit: '70.000',
    sethome: '50x',
    features: ['/ec', '/beezooka', '/feed', '/fly', '/nick', '/repair', '/heal', '/kit sultan', '+ Fitur LEGEND'],
    money: 'Rp850.000'
  },
  {
    name: 'SUPREME',
    price: 'Rp150.000',
    color: '#EF4444',
    icon: Flame,
    limit: 'Unlimited',
    sethome: '999x',
    features: ['/ec', '/feed', '/fly', '/repair', '/nick', '/heal', '/craft', '/head', '/beezooka', '/god', '/kit supreme', '+ Fitur SULTAN'],
    money: 'Rp1.000.000'
  },
  {
    name: 'CUSTOM',
    price: 'Rp300.000',
    color: '#EC4899',
    icon: Sparkles,
    limit: 'Unlimited',
    sethome: 'Unlimited',
    features: ['Semua fitur SUPREME', 'Custom Prefix', 'Custom Color Chat', 'Custom Nick Style', 'Akses Private Command', 'Prioritas Support Admin', '/fly tanpa batas', '/god (opsional)', '/vanish (opsional)', '/kit custom eksklusif'],
    money: 'Rp2.000.000',
    badge: 'ULTIMATE'
  }
]

const team = [
  { name: 'Alfin', role: 'Owner', color: '#FFD15C' },
  { name: 'Septian', role: 'Co-Owner', color: '#A855F7' },
  { name: 'Rizki Sanjaya', role: 'Admin', color: '#3B82F6' },
  { name: 'Nayka', role: 'Builder', color: '#22C55E' }
]

const features = [
  { icon: Pickaxe, title: 'Survival Economy', desc: 'Economi yang seimbang dan fair' },
  { icon: Shield, title: 'Claim Land', desc: 'Lindungi bangunanmu dari griefing' },
  { icon: Trophy, title: 'Event & Reward', desc: 'Event mingguan dengan hadiah menarik' },
  { icon: Heart, title: 'Ramah Player Baru', desc: 'Komunitas yang supportive' },
  { icon: Zap, title: 'Online 24/7', desc: 'Server selalu online' },
  { icon: Users, title: 'Team/Clan System', desc: 'Bentuk tim dengan temanmu' }
]

const rules = [
  { text: 'NO SPAM - Spam chat, stiker/emoji, atau link promosi tanpa izin', allowed: false },
  { text: 'NO TOXIC & SARA - Kata kasar, menghina member, rasis, pornografi', allowed: false },
  { text: 'HORMATI ADMIN & MEMBER - Gunakan bahasa sopan', allowed: true },
  { text: 'DILARANG SCAM - Penipuan atau jual beli tanpa izin', allowed: false },
  { text: 'DILARANG MEMBAHAS SERVER LAIN', allowed: false },
  { text: 'DILARANG 18+ - Menyamar gender', allowed: false },
  { text: 'IKUTI KEPUTUSAN ADMIN - Keputusan admin bersifat mutlak', allowed: true }
]

function App() {
  const [copied, setCopied] = useState(false)
  const [showRankModal, setShowRankModal] = useState<number | null>(null)

  const copyIP = () => {
    navigator.clipboard.writeText('play.omeletnetwork.my.id')
    setCopied(true)
    toast.success('IP Server disalin!')
    setTimeout(() => setCopied(false), 2000)
  }

  const scrollToRanks = () => {
    document.getElementById('ranks-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#1B1E26] text-[#F4F7FF]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-[#1B1E26]/90 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#FFD15C] rounded-lg flex items-center justify-center">
            <Gamepad2 className="w-5 h-5 text-[#1B1E26]" />
          </div>
          <span className="font-bold text-xl">OMELET</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#ranks-section" className="text-sm text-[#A9B3C7] hover:text-[#F4F7FF]">Ranks</a>
          <a href="#features-section" className="text-sm text-[#A9B3C7] hover:text-[#F4F7FF]">Fitur</a>
          <a href="#team-section" className="text-sm text-[#A9B3C7] hover:text-[#F4F7FF]">Tim</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 px-6 lg:px-16">
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block">BUILD.</span>
              <span className="block">PLAY.</span>
              <span className="block text-[#FFD15C]">BELONG.</span>
            </h1>
            <p className="text-[#A9B3C7] text-lg max-w-md">
              Omelet SMP adalah server survival multiplayer yang ramah dengan land claims, player shops, dan event mingguan.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={scrollToRanks}
                className="px-6 py-3 bg-[#FFD15C] text-[#1B1E26] font-semibold rounded-xl flex items-center gap-2 hover:brightness-110 transition"
              >
                <Crown className="w-5 h-5" />
                Lihat Rank
              </button>
              <button 
                onClick={copyIP}
                className="px-6 py-3 bg-[#2A2F3B] text-[#F4F7FF] font-semibold rounded-xl flex items-center gap-2 border border-[#F4F7FF]/10 hover:bg-[#353b47] transition"
              >
                {copied ? <Check className="w-5 h-5 text-[#22C55E]" /> : <Copy className="w-5 h-5" />}
                {copied ? 'Tersalin!' : 'Copy IP'}
              </button>
            </div>
          </div>

          <div className="bg-[#2A2F3B] rounded-2xl p-6 border border-[#F4F7FF]/10">
            <h3 className="text-xl font-bold mb-4">Server Address</h3>
            
            <div className="space-y-4">
              <div className="bg-[#1B1E26] rounded-xl p-4 border-l-4 border-[#22C55E]">
                <div className="flex items-center gap-2 mb-2">
                  <Gamepad2 className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-sm text-[#A9B3C7]">Java Edition (PC/Laptop)</span>
                </div>
                <div className="flex items-center justify-between bg-[#2A2F3B] rounded-lg px-3 py-2">
                  <code className="text-lg font-mono">play.omeletnetwork.my.id:25275</code>
                  <button onClick={copyIP} className="p-1 hover:bg-[#1B1E26] rounded">
                    {copied ? <Check className="w-4 h-4 text-[#22C55E]" /> : <Copy className="w-4 h-4 text-[#A9B3C7]" />}
                  </button>
                </div>
              </div>

              <div className="bg-[#1B1E26] rounded-xl p-4 border-l-4 border-[#3B82F6]">
                <div className="flex items-center gap-2 mb-2">
                  <Smartphone className="w-5 h-5 text-[#3B82F6]" />
                  <span className="text-sm text-[#A9B3C7]">Bedrock Edition (HP/Console)</span>
                </div>
                <div className="flex items-center justify-between bg-[#2A2F3B] rounded-lg px-3 py-2 mb-2">
                  <code className="text-lg font-mono">play.omeletnetwork.my.id</code>
                  <button onClick={copyIP} className="p-1 hover:bg-[#1B1E26] rounded">
                    {copied ? <Check className="w-4 h-4 text-[#22C55E]" /> : <Copy className="w-4 h-4 text-[#A9B3C7]" />}
                  </button>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[#A9B3C7]">Port:</span>
                  <code className="font-mono text-[#FFD15C]">25550</code>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-[#A9B3C7] flex items-center gap-2">
                <span className="w-2 h-2 bg-[#22C55E] rounded-full" />
                Server Online
              </span>
              <span className="text-[#22C55E]">14 Players</span>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section className="py-16 px-6 lg:px-16 bg-[#1e232d]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              CARA <span className="text-[#FFD15C]">JOIN</span>
            </h2>
            <p className="text-[#A9B3C7]">Bergabung dengan server kami sangat mudah</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: '1', title: 'Launch Minecraft', desc: 'Buka versi 1.20.x (Java) atau Bedrock terbaru', icon: Gamepad2 },
              { step: '2', title: 'Add Server', desc: 'Klik Multiplayer → Add Server, paste IP', icon: Copy },
              { step: '3', title: 'Join & Claim', desc: 'Masuk, claim landmu, dan mulai build', icon: Shield }
            ].map((item, i) => (
              <div key={i} className="bg-[#2A2F3B] rounded-xl p-6 border border-[#F4F7FF]/10">
                <div className="w-8 h-8 bg-[#FFD15C] rounded-full flex items-center justify-center text-[#1B1E26] font-bold mb-4">
                  {item.step}
                </div>
                <item.icon className="w-8 h-8 text-[#FFD15C] mb-4" />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-[#A9B3C7] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ranks Section */}
      <section id="ranks-section" className="py-16 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              LIST <span className="text-[#FFD15C]">RANK SERVER</span>
            </h2>
            <p className="text-[#A9B3C7]">Pilih rank yang sesuai dengan kebutuhanmu</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {ranks.map((rank, i) => (
              <div 
                key={i}
                className="bg-[#2A2F3B] rounded-xl border border-[#F4F7FF]/10 overflow-hidden hover:border-[#FFD15C]/50 transition cursor-pointer"
                style={{ borderTop: `4px solid ${rank.color}` }}
                onClick={() => setShowRankModal(i)}
              >
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${rank.color}20` }}>
                      <rank.icon className="w-5 h-5" style={{ color: rank.color }} />
                    </div>
                    {rank.badge && (
                      <span className="px-2 py-0.5 bg-[#EC4899] text-white text-xs rounded">{rank.badge}</span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold" style={{ color: rank.color }}>{rank.name}</h3>
                  <p className="text-2xl font-bold my-2">{rank.price}</p>
                  
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#A9B3C7]">Limit Block:</span>
                      <span className="font-mono">{rank.limit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#A9B3C7]">Sethome:</span>
                      <span className="font-mono">{rank.sethome}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#A9B3C7]">Money:</span>
                      <span className="font-mono text-[#FFD15C]">{rank.money}</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-[#F4F7FF]/10">
                    <p className="text-xs text-[#A9B3C7] mb-1">Features:</p>
                    <div className="flex flex-wrap gap-1">
                      {rank.features.slice(0, 3).map((feat, j) => (
                        <span key={j} className="text-xs px-2 py-1 bg-[#1B1E26] rounded">{feat}</span>
                      ))}
                      {rank.features.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-[#1B1E26] rounded text-[#A9B3C7]">+{rank.features.length - 3}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rank Modal */}
      {showRankModal !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowRankModal(null)}>
          <div className="bg-[#2A2F3B] rounded-2xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${ranks[showRankModal].color}20` }}>
                  {(() => {
                    const Icon = ranks[showRankModal].icon
                    return <Icon className="w-6 h-6" style={{ color: ranks[showRankModal].color }} />
                  })()}
                </div>
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: ranks[showRankModal].color }}>{ranks[showRankModal].name}</h3>
                  <p className="text-[#A9B3C7]">{ranks[showRankModal].price}</p>
                </div>
              </div>
              <button onClick={() => setShowRankModal(null)} className="text-2xl text-[#A9B3C7] hover:text-white">×</button>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between p-3 bg-[#1B1E26] rounded-lg">
                <span className="text-[#A9B3C7]">Limit Block</span>
                <span className="font-mono">{ranks[showRankModal].limit}</span>
              </div>
              <div className="flex justify-between p-3 bg-[#1B1E26] rounded-lg">
                <span className="text-[#A9B3C7]">Sethome</span>
                <span className="font-mono">{ranks[showRankModal].sethome}</span>
              </div>
              <div className="flex justify-between p-3 bg-[#1B1E26] rounded-lg">
                <span className="text-[#A9B3C7]">Money In-Game</span>
                <span className="font-mono text-[#FFD15C]">{ranks[showRankModal].money}</span>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-[#A9B3C7] mb-2">Semua Features:</p>
              <div className="flex flex-wrap gap-2">
                {ranks[showRankModal].features.map((feat, j) => (
                  <span key={j} className="text-sm px-3 py-2 bg-[#1B1E26] rounded-lg">{feat}</span>
                ))}
              </div>
            </div>

            <a 
              href={`https://wa.me/6283133288331?text=Halo%20bang,%20saya%20mau%20beli%20rank%20${ranks[showRankModal].name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 rounded-xl font-bold text-center text-[#1B1E26]"
              style={{ backgroundColor: ranks[showRankModal].color }}
            >
              Beli Rank {ranks[showRankModal].name}
            </a>
          </div>
        </div>
      )}

      {/* Features Section */}
      <section id="features-section" className="py-16 px-6 lg:px-16 bg-[#1e232d]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              FITUR <span className="text-[#FFD15C]">SERVER</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feat, i) => (
              <div key={i} className="bg-[#2A2F3B] rounded-xl p-5 border border-[#F4F7FF]/10">
                <feat.icon className="w-8 h-8 text-[#FFD15C] mb-3" />
                <h3 className="font-bold mb-1">{feat.title}</h3>
                <p className="text-[#A9B3C7] text-sm">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              GALERI <span className="text-[#FFD15C]">SERVER</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-xl overflow-hidden border border-[#F4F7FF]/10 bg-[#2A2F3B]">
              <div className="w-full h-48 bg-gradient-to-br from-[#22C55E]/20 to-[#1B1E26] flex items-center justify-center">
                <Gamepad2 className="w-16 h-16 text-[#22C55E]/50" />
              </div>
              <div className="p-3">
                <p className="font-semibold">Spawn Town</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-[#F4F7FF]/10 bg-[#2A2F3B]">
              <div className="w-full h-48 bg-gradient-to-br from-[#3B82F6]/20 to-[#1B1E26] flex items-center justify-center">
                <Shield className="w-16 h-16 text-[#3B82F6]/50" />
              </div>
              <div className="p-3">
                <p className="font-semibold">Player Shops</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-[#F4F7FF]/10 bg-[#2A2F3B]">
              <div className="w-full h-48 bg-gradient-to-br from-[#FFD15C]/20 to-[#1B1E26] flex items-center justify-center">
                <Crown className="w-16 h-16 text-[#FFD15C]/50" />
              </div>
              <div className="p-3">
                <p className="font-semibold">Base Overlook</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team-section" className="py-16 px-6 lg:px-16 bg-[#1e232d]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              TIM <span className="text-[#FFD15C]">SERVER</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {team.map((member, i) => (
              <div key={i} className="bg-[#2A2F3B] rounded-xl p-4 text-center border border-[#F4F7FF]/10">
                <div className="w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: `${member.color}20` }}>
                  <Users className="w-6 h-6" style={{ color: member.color }} />
                </div>
                <h4 className="font-bold">{member.name}</h4>
                <span className="text-sm" style={{ color: member.color }}>{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              ATURAN <span className="text-[#FFD15C]">SERVER</span>
            </h2>
          </div>

          <div className="bg-[#2A2F3B] rounded-xl p-6 border border-[#F4F7FF]/10">
            <div className="space-y-2">
              {rules.map((rule, i) => (
                <div key={i} className="flex items-start gap-3 py-2 border-b border-[#F4F7FF]/5 last:border-0">
                  {rule.allowed ? (
                    <Check className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                  ) : (
                    <span className="w-5 h-5 flex items-center justify-center text-[#EF4444] flex-shrink-0 mt-0.5 font-bold">×</span>
                  )}
                  <span className={rule.allowed ? '' : 'text-[#A9B3C7]'}>{rule.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 lg:px-16 bg-[#2A2F3B]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-[#FFD15C] rounded-lg flex items-center justify-center">
                  <Gamepad2 className="w-5 h-5 text-[#1B1E26]" />
                </div>
                <span className="font-bold text-xl">OMELET</span>
              </div>
              <p className="text-[#A9B3C7] text-sm">Premium Survival Server - Java & Bedrock Edition</p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Links</h4>
              <div className="space-y-1 text-sm">
                <a href="#" className="block text-[#A9B3C7] hover:text-white">Vote Server</a>
                <a href="#" className="block text-[#A9B3C7] hover:text-white">Rules</a>
                <a href="#" className="block text-[#A9B3C7] hover:text-white">Support</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-3">Kontak</h4>
              <div className="space-y-1 text-sm">
                <a href="https://wa.me/6283133288331" className="block text-[#A9B3C7] hover:text-white">WhatsApp Owner</a>
                <a href="mailto:support@omeletnetwork.my.id" className="block text-[#A9B3C7] hover:text-white">Email Support</a>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-[#F4F7FF]/10 text-center text-sm text-[#A9B3C7]">
            <p>© Omelet SMP. Not affiliated with Mojang/Microsoft.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
