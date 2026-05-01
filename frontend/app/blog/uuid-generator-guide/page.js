import Link from 'next/link'

export const metadata = {
  title: 'UUID Generator Complete Guide - When and How to Use UUIDs | DevTools Hub',
  description: 'Master UUID generation with our complete guide. Learn UUID versions, when to use UUIDs vs other identifiers, best practices, and real-world examples.',
  keywords: ['uuid', 'guid', 'uuid generator', 'unique identifier', 'uuid vs guid', 'uuid versions'],
}

export default function UUIDGeneratorGuidePage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <header className="mb-12">
          <div className="text-sm text-text-secondary mb-4">
            Published on January 12, 2024 • 10 min read
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            UUID Generator Complete Guide: When and How to Use UUIDs
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            Master UUID generation and learn when to use UUIDs vs other identifiers. Complete guide covering UUID versions, best practices, and real-world use cases.
          </p>
        </header>

        {/* Featured Image */}
        <div className="mb-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl p-12 text-center">
          <div className="text-8xl mb-4">🔑</div>
          <p className="text-text-secondary">UUID Generator Tool</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">What is a UUID?</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            UUID stands for Universally Unique Identifier. It's a 128-bit number used to uniquely identify information in computer systems. 
            UUIDs are designed to be unique across space and time, meaning you can generate them independently on different systems without 
            coordination, and they'll (almost certainly) never collide.
          </p>

          <div className="bg-card-bg border border-border rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-text-primary mb-3">UUID Format</h3>
            <p className="text-text-secondary mb-3">
              A UUID is typically displayed as 32 hexadecimal digits, displayed in 5 groups separated by hyphens:
            </p>
            <pre className="bg-bg-secondary rounded-lg p-4 text-text-primary font-mono text-sm overflow-x-auto">
{`550e8400-e29b-41d4-a716-446655440000
└──┬───┘ └─┬─┘ └─┬─┘ └─┬─┘ └─────┬──────┘
   8      4     4     4        12 characters`}
            </pre>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">UUID vs GUID: What's the Difference?</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            GUID (Globally Unique Identifier) is Microsoft's implementation of the UUID standard. They're essentially the same thing:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-card-bg border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold text-text-primary mb-3">UUID</h3>
              <ul className="text-text-secondary text-sm space-y-2">
                <li>• Standard term (RFC 4122)</li>
                <li>• Used in most programming languages</li>
                <li>• Lowercase by convention</li>
                <li>• Example: 550e8400-e29b-41d4-a716-446655440000</li>
              </ul>
            </div>

            <div className="bg-card-bg border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold text-text-primary mb-3">GUID</h3>
              <ul className="text-text-secondary text-sm space-y-2">
                <li>• Microsoft's term</li>
                <li>• Used in .NET, Windows, SQL Server</li>
                <li>• Uppercase by convention</li>
                <li>• Example: 550E8400-E29B-41D4-A716-446655440000</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">UUID Versions Explained</h2>
          <p className="text-text-secondary mb-4 leading-relaxed">
            There are several UUID versions, each with different generation methods:
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-card-bg border-l-4 border-blue-500 rounded-lg p-6">
              <h3 className="text-xl font-bold text-text-primary mb-2">UUID v1 - Time-Based</h3>
              <p className="text-text-secondary mb-3">
                Generated from current timestamp and MAC address of the computer.
              </p>
              <div className="bg-bg-secondary rounded-lg p-4 mb-3">
                <pre className="text-text-primary font-mono text-sm">550e8400-e29b-11d4-a716-446655440000</pre>
              </div>
              <p className="text-text-secondary text-sm mb-2"><strong className="text-text-primary">Pros:</strong> Sortable by creation time</p>
              <p className="text-text-secondary text-sm"><strong className="text-text-primary">Cons:</strong> Reveals MAC address (privacy concern), not truly random</p>
            </div>

            <div className="bg-card-bg border-l-4 border-green-500 rounded-lg p-6">
              <h3 className="text-xl font-bold text-text-primary mb-2">UUID v4 - Random (Most Common)</h3>
              <p className="text-text-secondary mb-3">
                Generated using random or pseudo-random numbers. This is the most widely used version.
              </p>
              <div className="bg-bg-secondary rounded-lg p-4 mb-3">
                <pre className="text-text-primary font-mono text-sm">f47ac10b-58cc-4372-a567-0e02b2c3d479</pre>
              </div>
              <p className="text-text-secondary text-sm mb-2"><strong className="text-text-primary">Pros:</strong> No privacy concerns, truly random, simple to generate</p>
              <p className="text-text-secondary text-sm"><strong className="text-text-primary">Cons:</strong> Not sortable, very small collision chance</p>
            </div>

            <div className="bg-card-bg border-l-4 border-purple-500 rounded-lg p-6">
              <h3 className="text-xl font-bold text-text-primary mb-2">UUID v5 - Name-Based (SHA-1)</h3>
              <p className="text-text-secondary mb-3">
                Generated from a namespace and name using SHA-1 hashing. Same input always produces same UUID.
              </p>
              <div className="bg-bg-secondary rounded-lg p-4 mb-3">
                <pre className="text-text-primary font-mono text-sm">886313e1-3b8a-5372-9b90-0c9aee199e5d</pre>
              </div>
              <p className="text-text-secondary text-sm mb-2"><strong className="text-text-primary">Pros:</strong> Deterministic, reproducible</p>
              <p className="text-text-secondary text-sm"><strong className="text-text-primary">Cons:</strong> Requires namespace, more complex</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">When to Use UUIDs</h2>
          
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 mb-4">
            <h3 className="text-lg font-bold text-green-400 mb-3">✅ Use UUIDs When:</h3>
            <ul className="text-text-secondary space-y-2">
              <li>• You need globally unique identifiers across distributed systems</li>
              <li>• You want to generate IDs client-side without server coordination</li>
              <li>• You're building microservices that need independent ID generation</li>
              <li>• You want to avoid exposing sequential IDs (security)</li>
              <li>• You're merging data from multiple sources</li>
              <li>• You need to generate IDs offline</li>
            </ul>
          </div>

          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-red-400 mb-3">❌ Don't Use UUIDs When:</h3>
            <ul className="text-text-secondary space-y-2">
              <li>• You need human-readable IDs (use short codes instead)</li>
              <li>• Database performance is critical (UUIDs are larger than integers)</li>
              <li>• You need sequential ordering (use auto-increment or timestamps)</li>
              <li>• You're working with legacy systems that expect integers</li>
              <li>• Storage space is extremely limited</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">UUID vs Auto-Increment IDs</h2>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-card-bg">
                  <th className="border border-border p-4 text-left text-text-primary">Feature</th>
                  <th className="border border-border p-4 text-left text-text-primary">UUID</th>
                  <th className="border border-border p-4 text-left text-text-primary">Auto-Increment</th>
                </tr>
              </thead>
              <tbody className="text-text-secondary">
                <tr>
                  <td className="border border-border p-4 font-bold">Size</td>
                  <td className="border border-border p-4">128 bits (16 bytes)</td>
                  <td className="border border-border p-4">32-64 bits (4-8 bytes)</td>
                </tr>
                <tr className="bg-card-bg/50">
                  <td className="border border-border p-4 font-bold">Generation</td>
                  <td className="border border-border p-4">Client or server</td>
                  <td className="border border-border p-4">Server only</td>
                </tr>
                <tr>
                  <td className="border border-border p-4 font-bold">Uniqueness</td>
                  <td className="border border-border p-4">Globally unique</td>
                  <td className="border border-border p-4">Unique per table</td>
                </tr>
                <tr className="bg-card-bg/50">
                  <td className="border border-border p-4 font-bold">Predictability</td>
                  <td className="border border-border p-4">Unpredictable</td>
                  <td className="border border-border p-4">Sequential</td>
                </tr>
                <tr>
                  <td className="border border-border p-4 font-bold">Performance</td>
                  <td className="border border-border p-4">Slower (larger index)</td>
                  <td className="border border-border p-4">Faster (smaller index)</td>
                </tr>
                <tr className="bg-card-bg/50">
                  <td className="border border-border p-4 font-bold">URL Friendly</td>
                  <td className="border border-border p-4">Long but safe</td>
                  <td className="border border-border p-4">Short and simple</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Real-World Use Cases</h2>

          <div className="bg-card-bg border border-border rounded-xl p-6 mb-4">
            <h3 className="text-xl font-bold text-text-primary mb-3">🔍 Use Case 1: Distributed Systems</h3>
            <p className="text-text-secondary mb-3">
              <strong>Scenario:</strong> You have multiple microservices that need to create user records independently.
            </p>
            <p className="text-text-secondary mb-3">
              <strong>Solution:</strong> Each service generates UUIDs for new users. No coordination needed, no ID conflicts.
            </p>
            <pre className="bg-bg-secondary rounded-lg p-4 text-text-primary font-mono text-sm overflow-x-auto">
{`// Service A creates user
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "name": "John Doe",
  "service": "auth"
}

// Service B creates user
{
  "id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  "name": "Jane Smith",
  "service": "billing"
}`}
            </pre>
          </div>

          <div className="bg-card-bg border border-border rounded-xl p-6 mb-4">
            <h3 className="text-xl font-bold text-text-primary mb-3">🔍 Use Case 2: Client-Side ID Generation</h3>
            <p className="text-text-secondary mb-3">
              <strong>Scenario:</strong> Mobile app needs to create records offline and sync later.
            </p>
            <p className="text-text-secondary mb-3">
              <strong>Solution:</strong> Generate UUIDs on the device. When online, sync to server without ID conflicts.
            </p>
            <pre className="bg-bg-secondary rounded-lg p-4 text-text-primary font-mono text-sm overflow-x-auto">
{`// Offline: Create note with UUID
const note = {
  id: crypto.randomUUID(), // Browser API
  title: "Meeting Notes",
  content: "...",
  createdAt: Date.now()
}

// Later: Sync to server (ID already set)
await api.post('/notes', note)`}
            </pre>
          </div>

          <div className="bg-card-bg border border-border rounded-xl p-6 mb-4">
            <h3 className="text-xl font-bold text-text-primary mb-3">🔍 Use Case 3: Security & Privacy</h3>
            <p className="text-text-secondary mb-3">
              <strong>Scenario:</strong> You don't want users to guess other user IDs in URLs.
            </p>
            <p className="text-text-secondary mb-3">
              <strong>Solution:</strong> Use UUIDs instead of sequential IDs.
            </p>
            <pre className="bg-bg-secondary rounded-lg p-4 text-text-primary font-mono text-sm overflow-x-auto">
{`// Bad: Sequential IDs are guessable
/api/users/1
/api/users/2
/api/users/3

// Good: UUIDs are unpredictable
/api/users/550e8400-e29b-41d4-a716-446655440000
/api/users/f47ac10b-58cc-4372-a567-0e02b2c3d479`}
            </pre>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">How to Generate UUIDs in Different Languages</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-card-bg border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-text-primary mb-3">JavaScript / Node.js</h3>
              <pre className="bg-bg-secondary rounded-lg p-4 text-text-primary font-mono text-sm overflow-x-auto">
{`// Browser (modern)
const uuid = crypto.randomUUID()

// Node.js (built-in)
import { randomUUID } from 'crypto'
const uuid = randomUUID()

// Using uuid package
import { v4 as uuidv4 } from 'uuid'
const uuid = uuidv4()`}
              </pre>
            </div>

            <div className="bg-card-bg border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-text-primary mb-3">Python</h3>
              <pre className="bg-bg-secondary rounded-lg p-4 text-text-primary font-mono text-sm overflow-x-auto">
{`import uuid

# UUID v4 (random)
my_uuid = uuid.uuid4()
print(str(my_uuid))

# UUID v1 (time-based)
my_uuid = uuid.uuid1()

# UUID v5 (name-based)
namespace = uuid.NAMESPACE_DNS
my_uuid = uuid.uuid5(namespace, 'example.com')`}
              </pre>
            </div>

            <div className="bg-card-bg border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-text-primary mb-3">Java</h3>
              <pre className="bg-bg-secondary rounded-lg p-4 text-text-primary font-mono text-sm overflow-x-auto">
{`import java.util.UUID;

// Generate random UUID
UUID uuid = UUID.randomUUID();
String uuidString = uuid.toString();

// Parse UUID from string
UUID parsed = UUID.fromString("550e8400-e29b-41d4-a716-446655440000");`}
              </pre>
            </div>

            <div className="bg-card-bg border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-text-primary mb-3">C# / .NET</h3>
              <pre className="bg-bg-secondary rounded-lg p-4 text-text-primary font-mono text-sm overflow-x-auto">
{`using System;

// Generate new GUID
Guid guid = Guid.NewGuid();
string guidString = guid.ToString();

// Parse GUID from string
Guid parsed = Guid.Parse("550e8400-e29b-41d4-a716-446655440000");`}
              </pre>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">UUID Best Practices</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-text-primary mb-2">💡 Tip 1: Use UUID v4 for Most Cases</h3>
              <p className="text-text-secondary">
                Unless you have specific requirements, UUID v4 (random) is the best choice. It's simple, secure, and widely supported.
              </p>
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-text-primary mb-2">💡 Tip 2: Store as Binary in Databases</h3>
              <p className="text-text-secondary mb-3">
                Store UUIDs as binary (16 bytes) instead of strings (36 characters) to save space and improve performance.
              </p>
              <pre className="bg-bg-secondary rounded-lg p-4 text-text-primary font-mono text-sm overflow-x-auto">
{`-- MySQL: Use BINARY(16)
CREATE TABLE users (
  id BINARY(16) PRIMARY KEY,
  name VARCHAR(255)
);

-- PostgreSQL: Use UUID type
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255)
);`}
              </pre>
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-text-primary mb-2">💡 Tip 3: Use Lowercase for Consistency</h3>
              <p className="text-text-secondary">
                While UUIDs are case-insensitive, use lowercase by convention for better readability and consistency.
              </p>
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-text-primary mb-2">💡 Tip 4: Don't Rely on UUIDs for Ordering</h3>
              <p className="text-text-secondary">
                UUIDs (especially v4) are not sequential. If you need ordering, add a separate timestamp field.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Common Mistakes to Avoid</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-red-400 mb-2">❌ Mistake 1: Using UUIDs as Display IDs</h3>
              <p className="text-text-secondary mb-3">
                UUIDs are too long for users to read or type. Use short codes for user-facing IDs.
              </p>
              <pre className="bg-bg-secondary rounded-lg p-4 text-text-primary font-mono text-sm overflow-x-auto">
{`// Bad: User-facing UUID
Order ID: 550e8400-e29b-41d4-a716-446655440000

// Good: Short code for users, UUID internally
Order ID: ORD-12345
Internal ID: 550e8400-e29b-41d4-a716-446655440000`}
              </pre>
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-red-400 mb-2">❌ Mistake 2: Not Validating UUID Format</h3>
              <p className="text-text-secondary mb-3">
                Always validate UUIDs before using them to prevent errors.
              </p>
              <pre className="bg-bg-secondary rounded-lg p-4 text-text-primary font-mono text-sm overflow-x-auto">
{`// JavaScript validation
function isValidUUID(uuid) {
  const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
  return regex.test(uuid)
}

// Usage
if (!isValidUUID(userId)) {
  throw new Error('Invalid user ID format')
}`}
              </pre>
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-red-400 mb-2">❌ Mistake 3: Assuming UUIDs Are Sortable</h3>
              <p className="text-text-secondary">
                UUID v4 is random and not sortable. If you need time-based sorting, use UUID v1 or add a timestamp field.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Using Our UUID Generator Tool</h2>
          <p className="text-text-secondary mb-4 leading-relaxed">
            Our free UUID Generator makes it easy to create UUIDs instantly:
          </p>

          <ol className="text-text-secondary space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary text-xl">1.</span>
              <span><strong className="text-text-primary">Click Generate:</strong> Instantly create a new UUID v4.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary text-xl">2.</span>
              <span><strong className="text-text-primary">Copy to Clipboard:</strong> One-click copy for easy use in your code.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary text-xl">3.</span>
              <span><strong className="text-text-primary">Generate Multiple:</strong> Create bulk UUIDs for testing or data seeding.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary text-xl">4.</span>
              <span><strong className="text-text-primary">No Installation:</strong> Works directly in your browser, no signup required.</span>
            </li>
          </ol>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Conclusion</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            UUIDs are powerful tools for generating unique identifiers in distributed systems. They enable independent ID generation 
            across multiple services, improve security by being unpredictable, and work great for client-side applications. While they're 
            larger than auto-increment IDs and not sortable, their benefits often outweigh these drawbacks in modern applications.
          </p>

          <p className="text-text-secondary mb-6 leading-relaxed">
            Use UUID v4 for most cases, store them efficiently in your database, and remember to add timestamps if you need ordering. 
            With our free UUID Generator tool, you can create UUIDs instantly without writing any code.
          </p>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-8 text-center mt-12">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Generate UUIDs?</h3>
            <p className="text-white/90 mb-6">
              Try our free UUID Generator tool now - create unlimited UUIDs instantly!
            </p>
            <Link
              href="/uuid-generator"
              className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg hover:opacity-90 transition-all shadow-lg"
            >
              Use UUID Generator →
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 border-t border-border pt-12">
          <h3 className="text-2xl font-bold text-text-primary mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/json-formatter-guide" className="block bg-card-bg rounded-xl p-6 border border-border hover:border-primary transition-colors">
              <div className="text-3xl mb-3">📋</div>
              <h4 className="text-lg font-bold text-text-primary mb-2">JSON Formatter Complete Guide</h4>
              <p className="text-text-secondary text-sm">Learn how to format and validate JSON data</p>
            </Link>
            <Link href="/blog/api-testing-complete-guide" className="block bg-card-bg rounded-xl p-6 border border-border hover:border-primary transition-colors">
              <div className="text-3xl mb-3">🧪</div>
              <h4 className="text-lg font-bold text-text-primary mb-2">API Testing Complete Guide</h4>
              <p className="text-text-secondary text-sm">Master API testing with REST APIs</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
