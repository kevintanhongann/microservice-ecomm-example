<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <form name="editForm" role="form" novalidate v-on:submit.prevent="save()">
        <h2
          id="storeApp.customer.home.createOrEditLabel"
          data-cy="CustomerCreateUpdateHeading"
          v-text="$t('storeApp.customer.home.createOrEditLabel')"
        >
          Create or edit a Customer
        </h2>
        <div>
          <div class="form-group" v-if="customer.id">
            <label for="id" v-text="$t('global.field.id')">ID</label>
            <input type="text" class="form-control" id="id" name="id" v-model="customer.id" readonly />
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('storeApp.customer.firstName')" for="customer-firstName">First Name</label>
            <input
              type="text"
              class="form-control"
              name="firstName"
              id="customer-firstName"
              data-cy="firstName"
              :class="{ valid: !$v.customer.firstName.$invalid, invalid: $v.customer.firstName.$invalid }"
              v-model="$v.customer.firstName.$model"
              required
            />
            <div v-if="$v.customer.firstName.$anyDirty && $v.customer.firstName.$invalid">
              <small class="form-text text-danger" v-if="!$v.customer.firstName.required" v-text="$t('entity.validation.required')">
                This field is required.
              </small>
            </div>
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('storeApp.customer.lastName')" for="customer-lastName">Last Name</label>
            <input
              type="text"
              class="form-control"
              name="lastName"
              id="customer-lastName"
              data-cy="lastName"
              :class="{ valid: !$v.customer.lastName.$invalid, invalid: $v.customer.lastName.$invalid }"
              v-model="$v.customer.lastName.$model"
              required
            />
            <div v-if="$v.customer.lastName.$anyDirty && $v.customer.lastName.$invalid">
              <small class="form-text text-danger" v-if="!$v.customer.lastName.required" v-text="$t('entity.validation.required')">
                This field is required.
              </small>
            </div>
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('storeApp.customer.gender')" for="customer-gender">Gender</label>
            <select
              class="form-control"
              name="gender"
              :class="{ valid: !$v.customer.gender.$invalid, invalid: $v.customer.gender.$invalid }"
              v-model="$v.customer.gender.$model"
              id="customer-gender"
              data-cy="gender"
              required
            >
              <option v-for="gender in genderValues" :key="gender" v-bind:value="gender" v-bind:label="$t('storeApp.Gender.' + gender)">
                {{ gender }}
              </option>
            </select>
            <div v-if="$v.customer.gender.$anyDirty && $v.customer.gender.$invalid">
              <small class="form-text text-danger" v-if="!$v.customer.gender.required" v-text="$t('entity.validation.required')">
                This field is required.
              </small>
            </div>
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('storeApp.customer.email')" for="customer-email">Email</label>
            <input
              type="text"
              class="form-control"
              name="email"
              id="customer-email"
              data-cy="email"
              :class="{ valid: !$v.customer.email.$invalid, invalid: $v.customer.email.$invalid }"
              v-model="$v.customer.email.$model"
              required
            />
            <div v-if="$v.customer.email.$anyDirty && $v.customer.email.$invalid">
              <small class="form-text text-danger" v-if="!$v.customer.email.required" v-text="$t('entity.validation.required')">
                This field is required.
              </small>
              <small
                class="form-text text-danger"
                v-if="!$v.customer.email.pattern"
                v-text="$t('entity.validation.pattern', { pattern: 'Email' })"
              >
                This field should follow pattern for "Email".
              </small>
            </div>
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('storeApp.customer.phone')" for="customer-phone">Phone</label>
            <input
              type="text"
              class="form-control"
              name="phone"
              id="customer-phone"
              data-cy="phone"
              :class="{ valid: !$v.customer.phone.$invalid, invalid: $v.customer.phone.$invalid }"
              v-model="$v.customer.phone.$model"
              required
            />
            <div v-if="$v.customer.phone.$anyDirty && $v.customer.phone.$invalid">
              <small class="form-text text-danger" v-if="!$v.customer.phone.required" v-text="$t('entity.validation.required')">
                This field is required.
              </small>
            </div>
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('storeApp.customer.addressLine1')" for="customer-addressLine1"
              >Address Line 1</label
            >
            <input
              type="text"
              class="form-control"
              name="addressLine1"
              id="customer-addressLine1"
              data-cy="addressLine1"
              :class="{ valid: !$v.customer.addressLine1.$invalid, invalid: $v.customer.addressLine1.$invalid }"
              v-model="$v.customer.addressLine1.$model"
              required
            />
            <div v-if="$v.customer.addressLine1.$anyDirty && $v.customer.addressLine1.$invalid">
              <small class="form-text text-danger" v-if="!$v.customer.addressLine1.required" v-text="$t('entity.validation.required')">
                This field is required.
              </small>
            </div>
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('storeApp.customer.addressLine2')" for="customer-addressLine2"
              >Address Line 2</label
            >
            <input
              type="text"
              class="form-control"
              name="addressLine2"
              id="customer-addressLine2"
              data-cy="addressLine2"
              :class="{ valid: !$v.customer.addressLine2.$invalid, invalid: $v.customer.addressLine2.$invalid }"
              v-model="$v.customer.addressLine2.$model"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('storeApp.customer.city')" for="customer-city">City</label>
            <input
              type="text"
              class="form-control"
              name="city"
              id="customer-city"
              data-cy="city"
              :class="{ valid: !$v.customer.city.$invalid, invalid: $v.customer.city.$invalid }"
              v-model="$v.customer.city.$model"
              required
            />
            <div v-if="$v.customer.city.$anyDirty && $v.customer.city.$invalid">
              <small class="form-text text-danger" v-if="!$v.customer.city.required" v-text="$t('entity.validation.required')">
                This field is required.
              </small>
            </div>
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('storeApp.customer.country')" for="customer-country">Country</label>
            <input
              type="text"
              class="form-control"
              name="country"
              id="customer-country"
              data-cy="country"
              :class="{ valid: !$v.customer.country.$invalid, invalid: $v.customer.country.$invalid }"
              v-model="$v.customer.country.$model"
              required
            />
            <div v-if="$v.customer.country.$anyDirty && $v.customer.country.$invalid">
              <small class="form-text text-danger" v-if="!$v.customer.country.required" v-text="$t('entity.validation.required')">
                This field is required.
              </small>
            </div>
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="$t('storeApp.customer.user')" for="customer-user">User</label>
            <select class="form-control" id="customer-user" data-cy="user" name="user" v-model="customer.user" required>
              <option v-if="!customer.user" v-bind:value="null" selected></option>
              <option
                v-bind:value="customer.user && userOption.id === customer.user.id ? customer.user : userOption"
                v-for="userOption in users"
                :key="userOption.id"
              >
                {{ userOption.login }}
              </option>
            </select>
          </div>
          <div v-if="$v.customer.user.$anyDirty && $v.customer.user.$invalid">
            <small class="form-text text-danger" v-if="!$v.customer.user.required" v-text="$t('entity.validation.required')">
              This field is required.
            </small>
          </div>
        </div>
        <div>
          <button type="button" id="cancel-save" data-cy="entityCreateCancelButton" class="btn btn-secondary" v-on:click="previousState()">
            <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.cancel')">Cancel</span>
          </button>
          <button
            type="submit"
            id="save-entity"
            data-cy="entityCreateSaveButton"
            :disabled="$v.customer.$invalid || isSaving"
            class="btn btn-primary"
          >
            <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.save')">Save</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts" src="./customer-update.component.ts"></script>
