<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <div v-if="notification">
        <h2 class="jh-entity-heading" data-cy="notificationDetailsHeading">
          <span v-text="$t('storeApp.notificationNotification.detail.title')">Notification</span> {{ notification.id }}
        </h2>
        <dl class="row jh-entity-details">
          <dt>
            <span v-text="$t('storeApp.notificationNotification.date')">Date</span>
          </dt>
          <dd>
            <span v-if="notification.date">{{ $d(Date.parse(notification.date), 'long') }}</span>
          </dd>
          <dt>
            <span v-text="$t('storeApp.notificationNotification.details')">Details</span>
          </dt>
          <dd>
            <span>{{ notification.details }}</span>
          </dd>
          <dt>
            <span v-text="$t('storeApp.notificationNotification.sentDate')">Sent Date</span>
          </dt>
          <dd>
            <span v-if="notification.sentDate">{{ $d(Date.parse(notification.sentDate), 'long') }}</span>
          </dd>
          <dt>
            <span v-text="$t('storeApp.notificationNotification.format')">Format</span>
          </dt>
          <dd>
            <span v-text="$t('storeApp.NotificationType.' + notification.format)">{{ notification.format }}</span>
          </dd>
          <dt>
            <span v-text="$t('storeApp.notificationNotification.userId')">User Id</span>
          </dt>
          <dd>
            <span>{{ notification.userId }}</span>
          </dd>
          <dt>
            <span v-text="$t('storeApp.notificationNotification.productId')">Product Id</span>
          </dt>
          <dd>
            <span>{{ notification.productId }}</span>
          </dd>
        </dl>
        <button type="submit" v-on:click.prevent="previousState()" class="btn btn-info" data-cy="entityDetailsBackButton">
          <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.back')"> Back</span>
        </button>
        <router-link
          v-if="notification.id"
          :to="{ name: 'NotificationEdit', params: { notificationId: notification.id } }"
          custom
          v-slot="{ navigate }"
        >
          <button @click="navigate" class="btn btn-primary">
            <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.edit')"> Edit</span>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./notification-details.component.ts"></script>
