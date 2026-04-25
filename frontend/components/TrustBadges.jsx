/**
 * TrustBadges Component
 * Displays trust indicators to boost conversions
 */
export default function TrustBadges() {
  const badges = [
    {
      icon: '👥',
      text: 'Used by 10,000+ developers',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '🎉',
      text: '100% Free & No Signup',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '🔒',
      text: 'Secure & Private',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '⚡',
      text: 'Lightning Fast',
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
        >
          <span className="text-2xl">{badge.icon}</span>
          <span className="text-sm md:text-base font-medium text-gray-700">
            {badge.text}
          </span>
        </div>
      ))}
    </div>
  )
}
