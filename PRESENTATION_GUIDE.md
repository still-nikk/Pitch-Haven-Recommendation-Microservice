# Azure Portal Navigation Guide for Pitch Haven Presentation

## 1. Resource Overview

- **Access Path**: [Azure Portal](https://portal.azure.com) → Resource Groups → `pitch-haven-rg`
- **What to Show**:
  - All deployed resources in one place
  - Cost analysis
  - Resource health
  - Access control (IAM)

## 2. Container Apps Service

- **Access Path**: Resource Groups → `pitch-haven-rg` → `pitch-haven-frontend` or `pitch-haven-backend`
- **Key Features to Demo**:

### Application Overview

- **Location**: "Overview" tab
- **Show**:
  - Application URL
  - Status
  - Resource usage graphs
  - Revision management

### Scale & Metrics

- **Location**: "Scale" section
- **Show**:
  - Min/Max replicas (0-1 for cost optimization)
  - CPU and Memory allocation
  - Scale rules
  - Current running instances

### Secrets & Configuration

- **Location**: "Configuration" tab
- **Show**:
  - Environment variables
  - Secrets management
  - How DATABASE_URL is securely stored

### Monitoring

- **Location**: "Monitoring" section
- **Show**:
  - Log stream (real-time logs)
  - Metrics dashboard
  - Performance graphs
  - HTTP traffic patterns

## 3. Container Apps Environment

- **Access Path**: Resource Groups → `pitch-haven-rg` → `pitch-haven-env`
- **Demo Points**:
  - Environment configuration
  - Networking setup
  - Log Analytics integration
  - Custom domains (if configured)

## 4. Log Analytics Workspace

- **Access Path**: Resource Groups → `pitch-haven-rg` → Log Analytics workspace
- **Key Features**:
  - Query logs using Kusto Query Language (KQL)
  - Custom dashboards
  - Alert rules
  - Diagnostic settings

## 5. Networking

- **Access Path**: Container Apps → Networking
- **Show**:
  - Ingress configuration
  - Network security
  - VNET integration (if configured)
  - Custom domains

## 6. Cost Management

- **Access Path**: Resource Group → Cost analysis
- **Demo Points**:
  - Cost by service
  - Cost optimization through zero-scaling
  - Budget monitoring
  - Resource optimization recommendations

## 7. Security Features

- **Access Path**: Container Apps → Security
- **Show**:
  - Microsoft Defender for Containers
  - Security recommendations
  - Compliance status
  - Identity and access management

## Presentation Flow Tips

1. **Start with Big Picture**

   - Begin at Resource Group level
   - Show overall architecture
   - Highlight resource relationships

2. **Drill Down into Container Apps**

   - Show frontend deployment
   - Navigate to backend service
   - Demonstrate independent scaling

3. **Focus on DevOps Features**

   - Show deployment logs
   - Demonstrate scaling in action
   - Display monitoring metrics

4. **Emphasize Enterprise Features**

   - Security implementations
   - High availability setup
   - Cost optimization
   - Monitoring and logging

5. **Live Demo Ideas**
   - Scale to zero demo (watch replicas go to 0)
   - View live logs during traffic
   - Show metrics during usage
   - Demonstrate update deployment

## Quick Access URLs

```plaintext
# Main Resources
Azure Portal: https://portal.azure.com
Resource Group: https://portal.azure.com/#@/resource/subscriptions/{subscription-id}/resourceGroups/pitch-haven-rg

# Container Apps
Frontend: https://portal.azure.com/#@/resource/subscriptions/{subscription-id}/resourceGroups/pitch-haven-rg/providers/Microsoft.App/containerApps/pitch-haven-frontend
Backend: https://portal.azure.com/#@/resource/subscriptions/{subscription-id}/resourceGroups/pitch-haven-rg/providers/Microsoft.App/containerApps/pitch-haven-backend

# Monitoring
Log Analytics: https://portal.azure.com/#@/resource/subscriptions/{subscription-id}/resourceGroups/pitch-haven-rg/providers/Microsoft.OperationalInsights/workspaces/pitch-haven-law
```

## Key Metrics to Highlight

1. **Performance Metrics**

   - Request latency
   - CPU/Memory usage
   - Concurrent connections
   - HTTP response codes

2. **Scaling Metrics**

   - Number of replicas
   - Scale trigger events
   - Cold start times
   - Resource utilization

3. **Cost Metrics**
   - Resource consumption
   - Pay-per-use model
   - Cost per service
   - Optimization opportunities

## Troubleshooting During Presentation

If you need to troubleshoot during the presentation:

1. **Container Issues**

   - Check container logs in "Log stream"
   - View revision history
   - Check environment variables
   - Verify container health

2. **Network Issues**

   - Check ingress configuration
   - Verify custom domain settings
   - Check network rules
   - Test endpoints

3. **Performance Issues**
   - Monitor active connections
   - Check resource utilization
   - View scaling history
   - Analyze log patterns
