import { NextResponse } from 'next/server';
import { Counter, register } from 'prom-client';

// Metric 1: Feature usage
const featureUsageCounter = new Counter({
  name: 'feature_usage_total',
  help: 'Total number of times feature flags are evaluated',
});

// Metric 2: Feature adoption
const featureAdoptionCounter = new Counter({
  name: 'feature_adoption_total',
  help: 'Total number of users using enabled features',
});

// Metric 3: Feature errors
const featureErrorCounter = new Counter({
  name: 'feature_errors_total',
  help: 'Total number of errors caused by feature flags',
});

// GET handler for Prometheus scraping
export async function GET() {
  return new NextResponse(await register.metrics(), {
    headers: { 'Content-Type': register.contentType },
  });
}

// POST handler to increment metrics
export async function POST(req) {
  try {
    const { action } = await req.json();

    if (action === 'usage') featureUsageCounter.inc();
    if (action === 'adoption') featureAdoptionCounter.inc();
    if (action === 'error') featureErrorCounter.inc();

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

