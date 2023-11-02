<script setup lang="ts">
import { ref } from 'vue'

import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'
import Toast from 'primevue/toast';
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import ConfirmDialog from 'primevue/confirmdialog';

import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const requests = ref([
  {
    NUP: '01-000072846',
    ilot: '840',
    departement: 'LITTORAL',
    commune: 'Cotonou',
    status: 'EnAttente',
    quartier: 'AHOUANLEKO',
    arrondissement: '12eme arrondissement',
    superficieEnM2: 269243
  },
  {
    NUP: '01-000072847',
    ilot: '840',
    departement: 'LITTORAL',
    commune: 'Cotonou',
    status: 'EnAttente',
    quartier: 'AHOUANLEKO',
    arrondissement: '12eme arrondissement',
    superficieEnM2: 269243
  },
  {
    NUP: '01-000072848',
    ilot: '841',
    departement: 'LITTORAL',
    commune: 'Cotonou',
    status: 'Valide',
    quartier: 'Sikècodji',
    arrondissement: '7eme arrondissement',
    superficieEnM2: 269243
  },
  {
    NUP: '01-000072849',
    ilot: '842',
    departement: 'LITTORAL',
    commune: 'Cotonou',
    status: 'EnAttente',
    quartier: 'Sikècodji',
    arrondissement: '7eme arrondissement',
    superficieEnM2: 269243
  },
  {
    NUP: '01-000072850',
    ilot: '842',
    departement: 'LITTORAL',
    commune: 'Cotonou',
    status: 'Rejete',
    quartier: 'Sikècodji',
    arrondissement: '7eme arrondissement',
    superficieEnM2: 269243
  }
])

const submittedRequest = ref({
  NUP: '01-000072846',
  ilot: '840',
  departement: 'LITTORAL',
  commune: 'Cotonou',
  status: 'EnAttente',
  quartier: 'AHOUANLEKO',
  arrondissement: '12eme arrondissement',
  superficieEnM2: 269243
})

const selectedRequest = ref()
const metaKey = ref(true)
const showDetails = ref(false)
const showForm = ref(false)

// Functions (methods vue options)

const sellPlot = (data: any) => {
    console.log('Event ---- ', event)
    confirm.require({
        group: 'headless',
        header: 'Êtes vous sûr ?',
        message: `Mise en vente de la parcelle ${data.NUP} d'un montant de 8 453 202 F FCFA`,
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmé', detail: 'Mise en vente effectuée', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Annulé', detail: 'Mise en vente annulée', life: 3000 });
        }
    });
};

const confirmDeletePlot = () => { }

const onRowSelect = (event: any) => {
  showDetails.value = true
  console.log('Event ===>', event)
}

const onSubmitDeclaration = () => {
  showForm.value = true
}
</script>

<template>
  <div class="card">
    <DataTable
      v-model:selection="selectedRequest"
      :value="requests"
      selectionMode="single"
      :metaKeySelection="metaKey"
      dataKey="NUP"
      tableStyle="min-width: 50rem"
      @rowSelect="onRowSelect"
    >
      <template #header>
        <div class="flex flex-wrap align-items-center justify-content-between gap-2">
          <span class="text-xl text-900 font-bold">Liste des parcelles</span>
        </div>
      </template>
      <Column field="NUP" header="NUP"></Column>
      <Column field="ilot" header="Ilot"></Column>
      <!-- <Column field="numTitreFoncier" header="Titre Foncier"></Column> -->
      <!-- <Column field="superficieEnM2" header="Superficie en m²"></Column> -->
      <Column field="departement" header="Département"></Column>
      <Column field="commune" header="Commune"></Column>
      <!-- <Column field="quartier" header="Quartier"></Column> -->
      <!-- <Column field="status" header="Statut">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatus(data.status)" />
        </template>
      </Column> -->
      <!-- <Column field="arrondissement" header="Arrondissement"></Column> -->
      <Column :exportable="false" style="min-width: 2rem">
        <template #body="slotProps">
          <Button
            icon="pi pi-dollar"
            label="mettre en vente"
            outlined
            class="mr-2"
            size="small"
            @click="sellPlot(slotProps.data)"
          />
          <!-- <Button
            icon="pi pi-trash"
            outlined
            severity="danger"
            size="small"
            @click="confirmDeletePlot(slotProps.data)"
          /> -->
        </template>
      </Column>
    </DataTable>
  </div>

  <!-- Modal show declaration details -->
  <Dialog
    v-model:visible="showDetails"
    modal
    header="Informations sur la déclaration"
    :style="{ width: '35rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <div class="flex">
      <div class="flex-1">
        <div class="field align-items-center justify-content-center">
          <div>
            <label for="nup">NUP</label>
          </div>
          <InputText id="nup" v-model.trim="selectedRequest.NUP" disabled />
        </div>

        <div class="field align-items-center justify-content-center">
          <div>
            <label for="departement">Département</label>
          </div>
          <InputText id="departement" v-model="selectedRequest.departement" disabled />
        </div>

        <div class="field align-items-center justify-content-center">
          <div>
            <label for="arrondissement">Arrondissement</label>
          </div>
          <InputText id="arrondissement" v-model="selectedRequest.arrondissement" disabled />
        </div>

        <div class="field align-items-center justify-content-center">
          <div>
            <label for="superficieEnM2">Surface estimée (m²)</label>
          </div>
          <InputText id="superficieEnM2" v-model="selectedRequest.superficieEnM2" disabled />
        </div>
      </div>

      <div class="flex-1">
        <div class="field align-items-center justify-content-center">
          <div>
            <label for="ilot">Ilot</label>
          </div>
          <InputText id="ilot" v-model.trim="selectedRequest.ilot" disabled />
        </div>

        <div class="field align-items-center justify-content-center">
          <div>
            <label for="commune">Commune</label>
          </div>
          <InputText id="commune" v-model="selectedRequest.commune" disabled />
        </div>

        <div class="field align-items-center justify-content-center">
          <div>
            <label for="quartier">Quartier</label>
          </div>
          <InputText id="quartier" v-model="selectedRequest.quartier" disabled />
        </div>
      </div>
    </div>
  </Dialog>
  <!-- END Modal show declaration details -->

  <!-- Modal to submit declaration -->
  <Dialog
    v-model:visible="showForm"
    :modal="true"
    header="Soumettre une déclaration"
    :style="{ width: '35rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <div class="flex">
      <div class="flex-1">
        <div class="field align-items-center justify-content-center">
          <div class="mb-2">
            <label for="nup" class="font-medium">NUP</label>
          </div>
          <InputText id="nup" v-model.trim="submittedRequest.NUP" />
        </div>

        <div class="field align-items-center justify-content-center">
          <div class="mb-2">
            <label for="departement" class="font-medium">Département</label>
          </div>
          <InputText id="departement" v-model="submittedRequest.departement" />
        </div>

        <div class="field align-items-center justify-content-center">
          <div class="mb-2">
            <label for="arrondissement" class="font-medium">Arrondissement</label>
          </div>
          <InputText id="arrondissement" v-model="submittedRequest.arrondissement" />
        </div>

        <div class="field align-items-center justify-content-center">
          <div class="mb-2">
            <label for="superficieEnM2" class="font-medium">Surface estimée (m²)</label>
          </div>
          <InputText id="superficieEnM2" v-model="submittedRequest.superficieEnM2" />
        </div>
      </div>

      <div class="flex-1">
        <div class="field align-items-center justify-content-center">
          <div class="mb-2">
            <label for="ilot" class="font-medium">Ilot</label>
          </div>
          <InputText id="ilot" v-model.trim="submittedRequest.ilot" />
        </div>

        <div class="field align-items-center justify-content-center">
          <div class="mb-2">
            <label for="commune" class="font-medium">Commune</label>
          </div>
          <InputText id="commune" v-model="submittedRequest.commune" />
        </div>

        <div class="field align-items-center justify-content-center">
          <div class="mb-2">
            <label for="quartier" class="font-medium">Quartier</label>
          </div>
          <InputText id="quartier" v-model="submittedRequest.quartier" />
        </div>
      </div>
    </div>

    <template #footer>
      <Button label="Annuler" severity="danger" icon="pi pi-times" text @click="showForm = false" />
      <Button label="Confirmer" icon="pi pi-check" text @click="submitRequest" />
    </template>
  </Dialog>
  <!-- END Modal to submit declaration -->


  <ConfirmDialog group="headless">
        <template #container="{ message, acceptCallback, rejectCallback }">
            <div class="flex flex-column align-items-center p-5 surface-overlay border-round">
                <div class="border-circle bg-primary inline-flex justify-content-center align-items-center h-6rem w-6rem -mt-8">
                    <i class="pi pi-question text-5xl"></i>
                </div>
                <span class="font-bold text-2xl block mb-2 mt-4">{{ message.header }}</span>
                <p class="mb-0">{{ message.message }}</p>
                <div class="flex align-items-center gap-2 mt-4">
                    <Button label="Confirmer" @click="acceptCallback" class="w-8rem"></Button>
                    <Button label="Annuler" outlined @click="rejectCallback" class="w-8rem"></Button>
                </div>
            </div>
        </template>
    </ConfirmDialog>
    <Toast />

</template>

<style scoped></style>
