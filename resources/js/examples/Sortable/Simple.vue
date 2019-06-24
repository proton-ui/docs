<template>
    <section>
        <p-sortable-list v-model="contacts">
            <ul class="list" slot-scope="{ items: contacts }">
                <p-sortable-item v-for="contact in contacts" :key="contact.id">
                    <li class="list--item flex justify-between items-center py-2">
                        <img :src="contact.avatar" alt="avatar" class="rounded-full w-12 mr-6">
                        
                        <div class="flex-1">
                            <span class="block text-sm">{{ contact.name }}</span>
                            <span class="block text-xs text-grey">{{ contact.email }}</span>
                        </div>

                        <p-sortable-handle>
                            <svg class="handle" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M14 4h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM8 4h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm6 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm-6 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm6 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm-6 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"/></svg>
                        </p-sortable-handle>
                    </li>
                </p-sortable-item>
            </ul>
        </p-sortable-list>
    </section>
</template>


<script>
    export default {
        data() {
            return {
                contacts: [
                    {
                        id: 1,
                        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
                        name: 'Sophia Torres',
                        email: 'sophia.torres44@example.com',
                    },

                    {
                        id: 2,
                        avatar: 'https://randomuser.me/api/portraits/men/39.jpg',
                        name: 'Jack Byrd',
                        email: 'jack.byrd71@example.com',
                    },

                    {
                        id: 3,
                        avatar: 'https://randomuser.me/api/portraits/women/52.jpg',
                        name: 'Sonia Diaz',
                        email: 'sonia.diaz11@example.com',
                    },

                    {
                        id: 4,
                        avatar: 'https://randomuser.me/api/portraits/men/55.jpg',
                        name: 'Lucas Mitchell',
                        email: 'lucas.mitchell19@example.com',
                    },

                    {
                        id: 5,
                        avatar: 'https://randomuser.me/api/portraits/women/51.jpg',
                        name: 'Caroline Powell',
                        email: 'caroline.powell34@example.com',
                    },

                    {
                        id: 6,
                        avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
                        name: 'Dennis Oliver',
                        email: 'dennis.oliver21@example.com',
                    },
                ],
            }
        }
    }
</script>
