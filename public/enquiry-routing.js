export const enquiryTeams = {
  sales: 'Sales',
  service: 'Service & IT Infrastructure',
  parts: 'Part Sales',
  recovery: 'Asset Recovery'
};

const teamByService = new Map([
  ['devices', 'sales'],
  ['cloud', 'sales'],
  ['office', 'service'],
  ['security', 'service'],
  ['repairs', 'service'],
  ['renewal', 'recovery']
]);

export function suggestEnquiryTeam(service, params) {
  const topic = params.get('topic');
  if (!service && topic === 'lenovo-partner') return 'sales';
  if (service === params.get('service')) {
    if (service === 'repairs' && (topic === 'lenovo-spares' || params.get('support') === 'spares')) return 'parts';
    if (service === 'cloud' && ['cloud-migration', 'microsoft-solutions'].includes(topic)) return 'service';
    if (service === 'renewal' && (topic === 'laptop-renewal' || params.get('lifecycle') === 'renew')) return 'service';
  }
  return teamByService.get(service) ?? '';
}
