<script lang="ts">
import type { V1NodeStatus } from '@kubernetes/client-node';

import Cell from '/@/lib/details/DetailsCell.svelte';
import Title from '/@/lib/details/DetailsTitle.svelte';

import ConditionsTable from './ConditionsTable.svelte';

export let artifact: V1NodeStatus | undefined;
</script>

{#if artifact}
  {#if artifact.nodeInfo}
    <tr>
      <Title>Node Info</Title>
    </tr>
    <tr>
      <Cell>Architecture</Cell>
      <Cell>{artifact.nodeInfo.architecture}</Cell>
    </tr>
    <tr>
      <Cell>Boot ID</Cell>
      <Cell>{artifact.nodeInfo.bootID}</Cell>
    </tr>
    <tr>
      <Cell>Container Runtime Version</Cell>
      <Cell>{artifact.nodeInfo.containerRuntimeVersion}</Cell>
    </tr>
    <tr>
      <Cell>Kernel Version</Cell>
      <Cell>{artifact.nodeInfo.kernelVersion}</Cell>
    </tr>
    <tr>
      <Cell>Kubelet Version</Cell>
      <Cell>{artifact.nodeInfo.kubeletVersion}</Cell>
    </tr>
    <tr>
      <Cell>Kube Proxy Version</Cell>
      <Cell>{artifact.nodeInfo.kubeProxyVersion}</Cell>
    </tr>
    <tr>
      <Cell>Machine ID</Cell>
      <Cell>{artifact.nodeInfo.machineID}</Cell>
    </tr>
    <tr>
      <Cell>Operating System</Cell>
      <Cell>{artifact.nodeInfo.operatingSystem}</Cell>
    </tr>
    <tr>
      <Cell>OS Image</Cell>
      <Cell>{artifact.nodeInfo.osImage}</Cell>
    </tr>
    <tr>
      <Cell>System UUID</Cell>
      <Cell>{artifact.nodeInfo.systemUUID}</Cell>
    </tr>
  {/if}
  <tr>
    <Title>Status</Title>
  </tr>
  {#if artifact.conditions}
    <tr>
      <Title>Conditions</Title>
    </tr>
    <ConditionsTable conditions={artifact.conditions} />
  {/if}
  {#if artifact.addresses}
    <tr>
      <Title>Addresses</Title>
    </tr>
    {#each artifact.addresses as address, index (index)}
      <tr>
        <Cell>{address.type}</Cell>
        <Cell>{address.address}</Cell>
      </tr>
    {/each}
  {/if}
  {#if artifact.capacity}
    <tr>
      <Title>Capacity</Title>
    </tr>
    {#each Object.entries(artifact.capacity) as [key, value] (key)}
      <tr>
        <Cell>{key}</Cell>
        <Cell>{value}</Cell>
      </tr>
    {/each}
  {/if}
  {#if artifact.allocatable}
    <tr>
      <Title>Allocatable</Title>
    </tr>
    {#each Object.entries(artifact.allocatable) as [key, value] (key)}
      <tr>
        <Cell>{key}</Cell>
        <Cell>{value}</Cell>
      </tr>
    {/each}
  {/if}
{/if}
